import React from 'react';
import type {} from 'styled-components/cssprop';
import type { AppProps } from 'next/app';
import CharcoalThemeProvider from '@/components/CharcoalThemeProvider';
import '@/styles/global.scss';

const MyApp: React.VFC<AppProps> = React.memo(function MyApp({
  Component,
  pageProps,
}) {
  return (
    <CharcoalThemeProvider>
      <Component {...pageProps} />
    </CharcoalThemeProvider>
  );
});

export default MyApp;
