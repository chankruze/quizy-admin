/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 09:44:50 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export const omit = (obj: any, key: string) => {
    const { [key]: omitted, ...rest } = obj;
    console.log(rest);
    return rest;
};
