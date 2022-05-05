/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Apr 30 2022 01:19:06 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { GoVerified, GoIssueOpened, GoX } from "react-icons/go";

import { Tab } from "../types/tab";

export enum TAB_TYPE {
  TAB_STUDENT_VERIFIED,
  TAB_STUDENT_PENDING,
  TAB_STUDENT_REJECTED,
  QUIZY_SUBMISSIONS,
}

export const studentTabs: Array<Tab> = [
  {
    id: TAB_TYPE.TAB_STUDENT_VERIFIED,
    title: "Verified",
    icon: GoVerified,
  },
  {
    id: TAB_TYPE.TAB_STUDENT_PENDING,
    title: "Pending",
    icon: GoIssueOpened,
  },
  {
    id: TAB_TYPE.TAB_STUDENT_REJECTED,
    title: "Rejected",
    icon: GoX,
  },
];
