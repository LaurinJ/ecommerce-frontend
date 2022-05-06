import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo-client";
import App from "next/app";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";
import CartProvider from "../context/CartProvider";
import NotificationProvider from "../context/NotificationProvider";
import "../styles/style.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <React.Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Head>
        <title>Ecommerce app | {process.env.APP_NAME}</title>
        <meta name="description" content="Ecommerce web app" />
        <link rel="canonical" href={`${process.env.BACKEND_LINK}`} />
        <meta
          property="og:title"
          content={`Ecommerce web app | ${process.env.APP_NAME}`}
        />
        <meta property="og:description" content="Ecommerce web app" />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${process.env.BACKEND_LINK}`} />
        <meta property="og:site_name" content={`${process.env.APP_NAME}`} />
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
