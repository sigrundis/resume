import React from 'react';
import Head from 'next/head';

const pageTitle = 'Sigrún Dís Hauksdóttir - Software Developer';
const description = 'Online Resume';

const WebsiteHead = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="description" content={description}></meta>
    <meta property="og:url" content="sigrund.is" key="ogurl" />
    <meta
      property="og:image"
      content={'https://sigrund.is/img/share-img.png'}
      key="ogimage"
    />
    <meta property="og:site_name" content={pageTitle} key="ogsitename" />
    <meta property="og:title" content={pageTitle} key="ogtitle" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} key="ogdesc" />
    <title>{pageTitle}</title>
    <link
      rel="preload"
      href="/fonts/montserrat.woff2"
      as="font"
      type="font/woff2"
    />
  </Head>
);

export default WebsiteHead;
