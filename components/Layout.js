
import React from 'react';

import Head from 'next/head';
// import Link from 'next/link';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <>

      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar />

      <main>{props.children}</main>
      <Footer />
    </>
  );
}