import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StylesProvider, createGenerateClassName } from '@mui/styles'
import DataProvider from '../context/DataContext'


function MyApp({ Component, pageProps }: AppProps) {



  return (
    <DataProvider>
      <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'c' })}>
        <Component {...pageProps} />
      </StylesProvider>
    </DataProvider>
  )
}

export default MyApp
