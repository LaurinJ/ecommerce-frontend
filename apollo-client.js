import Router from "next/router";
import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { useMemo } from "react";
import { getCookie, getLocalStorage } from "./actions/auth";
import { onError } from "@apollo/client/link/error";

let apolloClient;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message.includes("Nejsi přihlášený/ná")) {
        Router.push("/account/login");
      }
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const serverLink =
  typeof window === "undefined"
    ? `${process.env.BACKEND_SERVER_LINK}graphql`
    : `${process.env.BACKEND_LINK}graphql`;

let httpLink = new HttpLink({
  uri: serverLink,
});

const authLink = setContext((_, { headers }) => {
  // // get the authentication token from local storage if it exists
  const token = getCookie("accessToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

httpLink = errorLink.concat(authLink.concat(httpLink));

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `${process.env.BACKEND_WS_LINK}graphql`,
      options: {
        reconnect: true,
        connectionParams: {
          authorization: `Bearer ${getCookie("accessToken")}`,
          chatid: getLocalStorage("chatId"),
        },
      },
    })
  : null;

const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: splitLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getReviews: {
              // Don't cache separate results based on
              // any of this field's arguments.
              keyArgs: ["product_id"],
              // Concatenate the incoming list items with
              // the existing list items.
              merge(existing = { reviews: [], pages: 1 }, incoming) {
                const reviews = [...existing.reviews, ...incoming.reviews];

                return { ...existing, pages: incoming.pages, reviews: reviews };
              },
            },
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
