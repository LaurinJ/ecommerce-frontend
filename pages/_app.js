import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo-client";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
// import AppContext from "../context/MenuContext";
import Link from "next/link";
// import "../styles/global.css";
import "../styles/style.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  const getLayout = Component.getLayout || ((page) => page);

  // const [leftMenu, setLeftMenu] = useState({ state: false, type: "Menu" });
  // const [openFilter, setOpenFilter] = useState(true);

  return (
    <React.Fragment>
      <Head>
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

      {/* <AppContext.Provider
        value={{
          leftMenu: leftMenu,
          setMenu: setLeftMenu,
          filter: openFilter,
          setFilter: setOpenFilter,
        }}
      > */}
      <ApolloProvider client={client}>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ApolloProvider>
      {/* </AppContext.Provider> */}
    </React.Fragment>
  );
}

export default MyApp;
