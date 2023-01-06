import React from 'react'
import type { AppProps } from 'next/app'
import '@/styles/global.scss'

const MyApp: React.VFC<AppProps> = React.memo(function MyApp({
  Component,
  pageProps,
}) {
  return <Component {...pageProps} />
})

export default MyApp
