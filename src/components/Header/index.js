import React from 'react';
import Head from 'next/head';

export default function Header() {
  return (
    <Head>

      <title>AluraQuiz! - Steven Universo</title>

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

      <meta property="og:description" content="Um quiz sobre Steven Universo " />

      <meta property="og:url" content="https://aluraquiz.felipebeskow.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AluraQuiz! - Steven Universo" />
      <meta property="og:description" content="Um quiz sobre Steven Universo " />
      <meta property="og:image" content="https://hipertextual.com/files/2020/03/hipertextual-2020465354.jpeg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="aluraquiz.felipebeskow.vercel.app" />
      <meta property="twitter:url" content="https://aluraquiz.felipebeskow.vercel.app/" />
      <meta name="twitter:title" content="AluraQuiz! - Steven Universo" />
      <meta name="twitter:description" content="Um quiz sobre Steven Universo " />
      <meta name="twitter:image" content="https://hipertextual.com/files/2020/03/hipertextual-2020465354.jpeg" />
    </Head>
  );
}
