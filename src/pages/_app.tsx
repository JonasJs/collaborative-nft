import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext';
// import { ChakraProvider,  } from '@chakra-ui/react'


// Moralis
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider theme={theme}>
      <MoralisProvider
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_APP_SERVER}
        appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
      >
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </MoralisProvider>
    // </ChakraProvider>
    
  )
}

export default MyApp;