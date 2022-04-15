/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 15 2022 09:26:59 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export type Quiz = {
  id: string;
  title: string;
  description: string;
  branch: string;
  semester: string;
  questions: Array<any>;
};
