/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 06:04:54 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { IconContext } from "react-icons";
import { OptionType } from "../../../types/option";

const isActive = (link: string) => {
    const router = useRouter();
    return router.pathname === link;
};

const Option: React.FC<OptionType> = ({ title, icon, link }) => {
    return (
        <Link href={link}>
            <a
                className={`px-2 py-3 flex items-center cursor-pointer rounded-md
                duration-200
                hover:bg-green-100 active:bg-green-500
                ${
                    isActive(link) &&
                    "bg-green-500 hover:bg-green-500 text-white"
                }`}
            >
                <IconContext.Provider value={{ size: "28" }}>
                    {icon}
                    <p className="pl-2 font-roboto font-medium">{title}</p>
                </IconContext.Provider>
            </a>
        </Link>
    );
};

export default Option;
