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

const sidebarOptions = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        link: "/dashboard",
        isVisible: true,
        submenu: [],
    },
    {
        title: "Quizzes",
        icon: <MdQuiz />,
        link: "/quiz",
        isVisible: true,
        submenu: [],
    },
    {
        title: "Student",
        icon: <MdPerson />,
        link: "/student",
        isVisible: true,
        submenu: [],
    },
    {
        title: "Submission",
        icon: <MdFolder />,
        link: "/submission",
        isVisible: true,
        submenu: [],
    },
    {
        title: "Logout",
        icon: <MdLogout />,
        link: "/logout",
        isVisible: true,
        submenu: [],
    },
];

export default sidebarOptions;
