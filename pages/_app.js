import React from 'react';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';
import '../css/default.scss';

const MyApp = ({ Component, pageProps, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />{' '}
    </Provider>
  );
};

export default MyApp;
