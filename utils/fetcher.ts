/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 15:41:44 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
