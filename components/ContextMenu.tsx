/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 20:41:47 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { IconContext } from "react-icons";
import { MdDownload, MdEdit, MdInfo } from "react-icons/md";

interface Props {
    anchorPoint: {
        x: number;
        y: number;
    };
    data: any;
}

const menuOptions = [
    {
        label: "Download",
        icon: MdDownload,
        onClick: (data: any) => {
            console.log("Download", data);
        },
    },
    {
        label: "Edit",
        icon: MdEdit,
        onClick: (data: any) => {
            console.log("Edit", data);
        },
    },
    {
        label: "Info",
        icon: MdInfo,
        onClick: (data: any) => {
            console.log("Info", data);
        },
    },
];

const ContextMenu = ({ anchorPoint, data }: Props) => {
    return (
        <ul
            className="absolute bg-white rounded-md w-48 shadow-md z-50 text-gray-600"
            style={{
                left: `${anchorPoint.x}px`,
                top: `${anchorPoint.y}px`,
            }}
        >
            <IconContext.Provider value={{ size: "24", color: "gray" }}>
                {menuOptions.map((option) => (
                    <li
                        key={option.label}
                        className="flex items-center py-2 px-3 cursor-pointer 
                        hover:bg-gray-200 rounded-md"
                        onClick={() => option.onClick(data)}
                    >
                        <p className="mr-3">
                            <option.icon />
                        </p>
                        <p className="capitalize">{option.label}</p>
                    </li>
                ))}
            </IconContext.Provider>
        </ul>
    );
};

export default ContextMenu;
