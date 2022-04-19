/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 06:04:54 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Link from "next/link";
import { SideBarOptionType } from "../../../types/sideBarOption";
import { isActive } from "../../../utils";

export interface SideBarOptionProps {
  option: SideBarOptionType;
}

const RootLink = ({
  option,
  iconSize,
}: {
  option: SideBarOptionType;
  iconSize: number;
}) => {
  const active = isActive(option.link);

  return (
    <Link href={option.link}>
      <a
        className={`my-1 px-2 py-3 flex items-center cursor-pointer rounded-md duration-200 text-gray-500 hover:bg-green-100
        ${active && "bg-green-100 hover:bg-green-100 text-green-700"}`}
      >
        <option.icon size={iconSize} color={`${active ? "green" : "gray"}`} />
        <p className="pl-2 font-roboto font-medium capitalize">
          {option.title}
        </p>
      </a>
    </Link>
  );
};

const SideBarOption: React.FC<SideBarOptionProps> = ({ option }) => {
  if (option.submenu && option.submenu.length > 1) {
    return (
      <div>
        <RootLink option={option} iconSize={28} />
        <div className="my-1 ml-3">
          {option.submenu.map((suboption) => (
            <RootLink option={suboption} key={suboption.title} iconSize={20} />
          ))}
        </div>
      </div>
    );
  }

  return <RootLink option={option} iconSize={28} />;
};

export default SideBarOption;
