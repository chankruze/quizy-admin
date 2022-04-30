/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Apr 30 2022 14:21:47 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import Spinner from "../common/Spinner";
import StudentList from "./StudentList";

const PendingTab = () => {
  const { data, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/student/all/verification/pending`,
    fetcher,
  );

  return (
    <div className="w-full">
      {data && data.length > 0 ? (
        <StudentList students={data} />
      ) : (
        <div className="flex items-center justify-center p-4">
          <FcDeleteDatabase size={48} />
          <p className="ml-2 text-xl capitalize">
            No biodata verification pending
          </p>
        </div>
      )}
      {isValidating && (
        <div
          className="p-4 flex items-center justify-center text-lg text-gray-400
      rounded-md bg-gradient-to-t from-gray-50 to-white font-nunito"
        >
          <Spinner />
          <p>Refreshing...</p>
        </div>
      )}
    </div>
  );
};

export default PendingTab;
