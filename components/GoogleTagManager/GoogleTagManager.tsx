import React from 'react';
import Head from 'next/head';

const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

const GTM = () => {
  const scriptString = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

  return (
    NODE_ENV === 'production' &&
    typeof window !== 'undefined' && (
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: scriptString,
          }}
        />
      </Head>
    )
  );
};

export default GTM;
