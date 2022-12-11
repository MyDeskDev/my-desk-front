// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import theme from '@/styles/theme';
import Fonts from '@/styles/fonts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Desk Project</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
        />
        <meta name="description" content="My Desk Project" />
        <meta property="og:title" content="My Desk Project" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mydeskproject.com" />
        <meta property="og:description" content="My Desk Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Fonts />
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
