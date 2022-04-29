/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 06 2022 10:40:12 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import { NextPage } from "next";

import StatsCard from "../components/dashboard/StatsCard";
import UpcomingQuizzes from "../components/dashboard/UpcomingQuizzes";

const DashBoard: NextPage = () => {
  return (
    <>
      <div className="flex flex-wrap py-2 gap-2 font-poppins">
        <StatsCard
          dataUrl="/quiz/all/count"
          title="Total quizzes"
          bg="bg-gradient-to-bl from-green-50 to-red-500"
        />
        <StatsCard
          dataUrl="/student/all/verified/count"
          title="Verified students"
          bg="bg-gradient-to-bl from-green-50 to-green-500"
        />
        <StatsCard
          dataUrl="/quiz/all/count"
          title="Submissions"
          bg="bg-gradient-to-bl from-green-50 to-blue-500"
        />
      </div>
      <div className="py-2">
        <UpcomingQuizzes />
      </div>
    </>
  );
};

export default DashBoard;
