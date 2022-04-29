/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 07:15:49 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { IconType } from "react-icons";

export type NavLinkType = {
  title: string;
  icon: IconType;
  url: string;
  isVisible?: boolean;
  submenu?: Array<{
    title: string;
    url: string;
    icon: IconType;
  }>;
};
