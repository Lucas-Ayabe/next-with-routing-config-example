import "../shared/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../presentation";
import { mainMenuRoutes } from "../rounting";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout routes={mainMenuRoutes}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
