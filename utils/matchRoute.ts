/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 13 2022 08:36:59 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Router from "next/router";

export const isActive = (link: string) => {
  return Router.pathname.split("/")[1] === link.split("/")[1];
};
