// import index from "../pages/index";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import CartProvider from "../context/CartProvider";
import React from "react";
import { HttpLink } from "@apollo/client/link/http";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import fetch from "cross-fetch";

// let httpLink = new HttpLink({
//   uri: "http://localhost:4000/graphql",
// });

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
});

describe("Cart", () => {
  it("renders a cart", () => {
    render(
      // <ApolloProvider client={client}>
      <CartProvider>
        {/* <Layout> */}
        <Cart />
        {/* </Layout> */}
      </CartProvider>
      /* </ApolloProvider> */
    );
    // check if all components are rendered
    expect(screen.getByTestId("cart")).toBeInTheDocument();
    // console.log(screen.getByText("Tvůj košík je prázdný"));
  });
});
