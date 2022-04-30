import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo-client";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import CartProvider from "../context/CartProvider";
import NotificationProvider from "../context/NotificationProvider";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <React.Fragment>
      <Head></Head>

      <ApolloProvider client={client}>
        <NotificationProvider>
          <CartProvider>
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          </CartProvider>
        </NotificationProvider>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
