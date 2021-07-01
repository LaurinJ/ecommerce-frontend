import React, { useState } from "react";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import Link from "next/link";
// import "../styles/global.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  // const { Component, pageProps } = this.props;

  const [leftMenu, setLeftMenu] = useState({ state: false, type: "Menu" });
  const [openFilter, setOpenFilter] = useState(true);

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

      <AppContext.Provider
        value={{
          leftMenu: leftMenu,
          setMenu: setLeftMenu,
          filter: openFilter,
          setFilter: setOpenFilter,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default MyApp;
