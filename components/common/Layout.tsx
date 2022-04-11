/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 06 2022 10:41:07 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Head from "next/head";
import { config } from "../../config";
import SideBar from "./sidebar/SideBar";

interface Props {
    title?: string;
    sideBar?: true | undefined;
    className?: string | undefined;
}

const Layout: React.FC<Props> = ({ title, sideBar, className, children }) => {
    return (
        <div
            className={`flex h-screen w-full bg-white ${className} select-none overflow-hidden`}
        >
            {/* head */}
            <Head>
                {title ? (
                    <title>
                        {title} | {config.APP_NAME}
                    </title>
                ) : (
                    <title>{config.APP_NAME}</title>
                )}
                // TODO: update favicon.ico
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={config.APP_DESCRIPTION} />
                <meta name="author" content={config.APP_AUTHOR} />
                <meta name="email" content={config.APP_AUTHOR_EMAIL} />
                <meta name="github" content={config.APP_AUTHOR_GITHUB} />
                <meta name="instagram" content={config.APP_AUTHOR_INSTAGRAM} />
                <meta name="linkedin" content={config.APP_AUTHOR_LINKEDIN} />
                <meta name="twitter" content={config.APP_AUTHOR_TWITTER} />
                <meta name="youtube" content={config.APP_AUTHOR_YOUTUBE} />
            </Head>
            {sideBar && <SideBar />}
            <main className="flex-1 p-2 m-2 bg-white rounded-md overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;
