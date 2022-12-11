// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import theme from '@/styles/theme';
import Fonts from '@/styles/fonts';

import { SEO_DEFAULT } from '@/constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const title = pageProps.meta?.title ?? SEO_DEFAULT.title;
  const description = pageProps.meta?.description ?? SEO_DEFAULT.description;
  const image = pageProps.meta?.image ?? SEO_DEFAULT.image;

  return (
    <>
      <Head>
        <title>{title}</title>
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
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
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
