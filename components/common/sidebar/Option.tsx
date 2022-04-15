/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 06:04:54 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Link from "next/link";
import { IconContext } from "react-icons";
import { isActive } from "../../../utils";

export interface SideBarOptionProps {
    title: string;
    icon: any;
    link: string;
    isVisible: boolean;
    submenu: Array<unknown>;
}

const Option: React.FC<SideBarOptionProps> = ({ title, icon, link }) => {
    const active = isActive(link);

    return (
        <Link href={link}>
            <a
                className={`px-2 py-3 flex items-center cursor-pointer rounded-md
                duration-200 text-gray-600
                hover:bg-green-100 active:bg-green-100
                ${active && "bg-green-100 hover:bg-green-100 text-green-700"}`}
            >
                <IconContext.Provider
                    value={{
                        size: "28",
                        color: `${active ? "green" : "gray"}`,
                    }}
                >
                    {icon}
                    <p className="pl-2 font-roboto font-medium">{title}</p>
                </IconContext.Provider>
            </a>
        </Link>
    );
};

export default Option;
