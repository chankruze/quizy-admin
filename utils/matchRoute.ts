/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 13 2022 08:36:59 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useRouter } from "next/router";

export const isActive = (link: string) => {
    const router = useRouter();
    return router.pathname.includes(link);
};
