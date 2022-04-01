import React from 'react';
import type {} from 'styled-components/cssprop';
import type { AppProps } from 'next/app';
import '@/styles/global.css';

const MyApp: React.VFC<AppProps> = React.memo(function MyApp({
  Component,
  pageProps,
}) {
  return <Component {...pageProps} />;
});

export default MyApp;
