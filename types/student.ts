/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 17:03:49 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export type BioData = {
  email: string;
  name: string;
  photo?: string;
  fatherName: string;
  branch: string;
  semester: string;
  regdNo: string;
  gender: string;
  dob: string;
  caste: string;
  mob: string;
  fatherMob: string;
  [key: string]: string | number | boolean | undefined;
};

export type Student = {
  _id?: string;
  bioData: BioData;
  verification: "verified" | "rejected" | "pending";
  marks?: [];
};
