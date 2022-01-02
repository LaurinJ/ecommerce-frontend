import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { useMemo } from "react";

let apolloClient;

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const wsLink = process.browser
  ? new WebSocketLink({
      uri: "ws://localhost:4000/graphql",
      options: {
        reconnect: true,
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
    cache: new InMemoryCache(),
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
