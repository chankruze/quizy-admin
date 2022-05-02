/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 06 2022 10:41:07 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Head from "next/head";
import { config } from "../../config";
import NavBar from "./NavBar";

interface Props {
  title?: string;
  navBar?: true | undefined;
  className?: string | undefined;
}

const Layout: React.FC<Props> = ({ title, navBar, className, children }) => {
  return (
    <div
      className={`flex flex-col h-screen w-full bg-white ${className} select-none overflow-y-auto`}
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
        {/* // TODO: update favicon.ico */}
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
      {navBar && <NavBar />}
      <main className="hidden lg:flex flex-col w-full max-w-7xl m-auto flex-1">
        {children}
      </main>
      <main className="lg:hidden flex-1 p-4 flex justify-center items-center">
        <p className="text-center font-montserrat ">
          Website currently works only on Desktop view (min-width: 1024px)
        </p>
      </main>
    </div>
  );
};

export default Layout;
