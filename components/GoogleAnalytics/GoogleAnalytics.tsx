import React from 'react';
import Head from 'next/head';

const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const GA = () => {
  const htmlString = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());

gtag("config", ${GA_ID});`;

  return (
    <>
      {NODE_ENV === 'production' && typeof window !== 'undefined' ? (
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: '`' + htmlString + '`',
            }}
          />
        </Head>
      ) : null}
    </>
  );
};

export default GA;
