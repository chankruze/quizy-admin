/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 29 2022 10:45:22 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Link from "next/link";
import { config } from "../../config";
import React, { useEffect, useState } from "react";
import { SiVercel } from "react-icons/si";
import navLinks from "../../config/navLinks";
import { userService } from "../../services";
import NavLink from "./NavLink";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userService.userValue);
  }, []);

  if (!user) return null;

  return (
    <nav className="w-full h-16 flex justify-between p-2 sm:px-4 sm:border-b border-gray-100">
      <div className="flex flex-1 justify-center lg:flex-auto lg:justify-start gap-1">
        <Link href="/" passHref>
          <p className="font-bold font-poppins text-3xl flex items-center cursor-pointer text-blue-500">
            <SiVercel size={32} />
            <a className="ml-1">{config.APP_NAME}</a>
          </p>
        </Link>
        <p className="self-end text-xs font-nunito italic hidden sm:block">
          <span>v</span>
          {config.APP_VERSION}
        </p>
      </div>
      <div className="hidden lg:flex gap-1 sm:gap-2 flex-wrap">
        <div className="flex flex-wrap">
          {navLinks.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
