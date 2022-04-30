/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Apr 30 2022 14:17:52 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { IconType } from "react-icons";

export type Tab = {
  id: number;
  title: string;
  icon?: IconType;
  isActive?: boolean;
};
