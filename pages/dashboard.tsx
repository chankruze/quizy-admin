/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 06 2022 10:40:12 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import axios from "axios";
import { NextPage } from "next";
import { useEffect } from "react";

const DashBoard: NextPage = () => {
  const [quizzesCount, setQuizzesCount] = React.useState(0);
  const [submissionsCount, setSubmissionsCount] = React.useState(0);
  const [studentsCount, setStudentsCount] = React.useState(0);

  useEffect(() => {
    // quizzes count
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/quiz/all/count`)
      .then(({ data }) => setQuizzesCount(data.count));

    // submission count
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/submission/all/count`)
      .then(({ data }) => setSubmissionsCount(data.count));

    // students count
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/student/all/verified/count`)
      .then(({ data }) => setStudentsCount(data.count));
  });

  return (
    <div className="flex flex-wrap p-2 gap-2 font-poppins">
      <div className="flex-1 p-6 flex flex-col bg-white rounded-md shadow-md">
        <p className="text-6xl font-bold text-yellow-400">{quizzesCount}</p>
        <p className="capitalize text-lg pt-2 font">Total Quizzes</p>
      </div>
      <div className="flex-1 p-6 flex flex-col bg-white rounded-md shadow-md">
        <p className="text-6xl font-bold text-green-400">{submissionsCount}</p>
        <p className="capitalize text-lg pt-2">Submissions</p>
      </div>
      <div className="flex-1 p-6 flex flex-col bg-white rounded-md shadow-md">
        <p className="text-6xl font-bold text-pink-400">{studentsCount}</p>
        <p className="capitalize text-lg pt-2">Verified students</p>
      </div>
    </div>
  );
};

export default DashBoard;
