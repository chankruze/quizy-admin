/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Apr 12 2022 00:47:12 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Link from "next/link";
import React from "react";
import { MdAdd } from "react-icons/md";

const NewQuizButton = () => {
  return (
    <Link href="/quiz/new">
      <a
        className="w-max p-3 flex justify-center items-center 
        bg-blue-600 hover:bg-blue-500 rounded-md text-white text-lg cursor-pointer"
      >
        <MdAdd size={28} />
        <p className="ml-1 capitalize">new quiz</p>
      </a>
    </Link>
  );
};

export default NewQuizButton;
