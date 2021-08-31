import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import { useMemo } from "react";

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
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
