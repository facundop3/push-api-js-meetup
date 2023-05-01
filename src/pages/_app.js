import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
