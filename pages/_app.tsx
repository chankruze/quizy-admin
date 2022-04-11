import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import RouteGuard from "../components/RouteGuard";
import Layout from "../components/common/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <RouteGuard>
            <Layout sideBar>
                <Component {...pageProps} />
            </Layout>
        </RouteGuard>
    );
};

export default MyApp;
