import React from 'react';
import Head from 'next/head';
import { isBrowser } from '../../utils/helpers';

const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const GA = () => {
  const htmlString = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());

gtag("config", "${GA_ID}");`;

  return (
    NODE_ENV === 'production' &&
    isBrowser && (
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: htmlString,
          }}
        />
      </Head>
    )
  );
};

export default GA;
