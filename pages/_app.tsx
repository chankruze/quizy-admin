import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import RouteGuard from "../components/RouteGuard";
import Layout from "../components/common/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNprogress options={{ showSpinner: false }} />
      <RouteGuard>
        <Layout navBar>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </>
  );
};

export default MyApp;
