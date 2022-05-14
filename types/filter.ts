/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 14 2022 12:51:48 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export type FilterType = {
  branch: string;
  semester: string;
};

export type SortType = {
  field: string;
  order: "ASC" | "DESC";
};
