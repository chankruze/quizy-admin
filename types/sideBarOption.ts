/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 07:15:49 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { IconType } from "react-icons";

export type SideBarOptionType = {
  title: string;
  icon: IconType;
  link: string;
  isVisible?: boolean;
  submenu?: Array<{
    title: string;
    link: string;
    icon: IconType;
  }>;
};
