/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 06:16:18 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import {
    MdOutlineDashboard,
    MdOutlineQuiz,
    MdOutlineLogout,
    MdPersonOutline,
    MdOutlineFolder,
} from "react-icons/md";

const sidebarOptions = [
    {
        title: "Dashboard",
        icon: <MdOutlineDashboard />,
        link: "/dashboard",
        isVisible: true,
        submenu: [],
    },
    {
        title: "Quizzes",
        icon: <MdOutlineQuiz />,
        link: "/quiz",
        isVisible: true,
        submenu: [],
    },
    {
        title: "Student",
        icon: <MdPersonOutline />,
        link: "/student",
        isVisible: true,
        submenu: [],
    },
    {
        title: "Submission",
        icon: <MdOutlineFolder />,
        link: "/submission",
        isVisible: true,
        submenu: [],
    },
    {
        title: "Logout",
        icon: <MdOutlineLogout />,
        link: "/logout",
        isVisible: true,
        submenu: [],
    },
];

export default sidebarOptions;
