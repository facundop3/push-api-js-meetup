import SplashScreen from "@/components/SplashScreen";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <SplashScreen />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
