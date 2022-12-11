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
        <title>마이데스크프로젝트-책상에 취향을 녹이다</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
        />
        <meta name="description" content="당신의 책상 이야기를 들려주세요." />
        <meta
          property="og:title"
          content="마이데스크프로젝트-책상에 취향을 녹이다"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mydeskproject.com" />
        <meta
          property="og:description"
          content="당신의 책상 이야기를 들려주세요."
        />
        <meta property="og:image" content="/images/open-graph.png" />
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
