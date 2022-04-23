/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 15 2022 09:26:59 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export type Option = {
  id: string;
  label: string;
  value: string;
};

export type Question = {
  id: string;
  title: string;
  options: Array<Option>;
  answer: string | number;
};

export type Quiz = {
  _id: string;
  title: string;
  description: string;
  branch: string;
  semester: string;
  date: string;
  questions: Array<Question>;
};
