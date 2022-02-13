import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo-client";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import CartProvider from "../context/CartProvider";
import NotificationProvider from "../context/NotificationProvider";
import Link from "next/link";
// import "../styles/global.css";
import "../styles/style.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <React.Fragment>
      <Head>
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
          type="image/icon type"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
        {/* <script src="https://kit.fontawesome.com/79de57594b.js" crossOrigin="anonymous"></script> */}

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>

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
