/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 07:45:27 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { userService } from "../services";

interface Props {
    children: any;
}

const RouteGuard = ({ children }: Props) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false
        const hideContent = () => setAuthorized(false);
        router.events.on("routeChangeStart", hideContent);

        // on route change complete - run auth check
        router.events.on("routeChangeComplete", authCheck);

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off("routeChangeStart", hideContent);
            router.events.off("routeChangeComplete", authCheck);
        };
    }, []);

    function authCheck(url: string) {
        // redirect to login page if accessing a private page and not logged in
        const publicPaths = ["/login"];
        const path = url.split("?")[0];
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: "/login",
                query: { returnUrl: router.asPath },
            });
        } else {
            setAuthorized(true);
        }
    }

    return authorized && children;
};

export default RouteGuard;
