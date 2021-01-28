import React from 'react';
import { wrapper } from '../store/store';
import '../css/default.scss';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
