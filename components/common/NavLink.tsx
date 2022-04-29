/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 29 2022 11:13:05 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Link from "next/link";
import { NavLinkType } from "../../types/navLink";
import { isActive } from "../../utils";

interface Props {
  link: NavLinkType;
}

const NavLink: React.FC<Props> = ({ link }) => {
  const active = isActive(link.url);

  return (
    <div>
      <Link href={link.url} key={link.title}>
        <a
          className={`flex items-center p-3 font-medium  rounded-md 
          ${active ? "text-green-600" : "text-gray-300"}`}
        >
          <link.icon size={28} />
          <p className="pl-1">{link.title}</p>
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
