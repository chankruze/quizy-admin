/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 06:16:18 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import {
  MdDashboard,
  MdQuiz,
  MdLogout,
  MdPerson,
  MdFolder,
} from "react-icons/md";

import { GoVerified, GoUnverified } from "react-icons/go";

const navLinks = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    url: "/dashboard",
    isVisible: true,
    submenu: [],
  },
  {
    title: "Quizzes",
    icon: MdQuiz,
    url: "/quiz",
    isVisible: true,
    submenu: [],
  },
  {
    title: "Student",
    icon: MdPerson,
    url: "/student",
    isVisible: true,
    submenu: [
      {
        title: "Verified",
        url: "/student/verified",
        icon: GoVerified,
      },
      {
        title: "Unverified",
        url: "/student/unverified",
        icon: GoUnverified,
      },
    ],
  },
  {
    title: "Submission",
    icon: MdFolder,
    url: "/submission",
    isVisible: true,
    submenu: [],
  },
  {
    title: "Logout",
    icon: MdLogout,
    url: "/logout",
    isVisible: true,
    submenu: [],
  },
];

export default navLinks;
