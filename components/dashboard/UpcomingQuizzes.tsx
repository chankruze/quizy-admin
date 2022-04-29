/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 29 2022 16:16:37 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import useSWR from "swr";
import { Quiz } from "../../types/quiz";
import { fetcher } from "../../utils/fetcher";
import moment from "moment";
import Spinner from "../common/Spinner";

const UpcomingQuizzes = () => {
  const { data, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/quiz/upcoming/5`,
    fetcher,
  );

  return (
    <>
      <p className="font-montserrat font-semibold py-2 text-gray-500">
        Upcoming Quizzes
      </p>
      <div>
        {data &&
          data.length > 0 &&
          data.map((quiz: Quiz) => (
            <div key={quiz._id} className="flex items-center p-3 border-b">
              <div className="flex-1 flex items-center gap-2">
                <p className="bg-green-100 px-2 rounded-md font-nunito">
                  {moment(quiz.date).format("MMM DD YYYY, hh:mm A")}
                </p>
                <p className="bg-yellow-100 px-2 rounded-md font-nunito">
                  {quiz.semester}
                </p>
                <p className="bg-blue-100 px-2 rounded-md font-nunito">
                  {quiz.branch}
                </p>
                <p className="font-poppins">{quiz.title}</p>
              </div>
            </div>
          ))}
      </div>
      {isValidating && (
        <div
          className="p-4 flex items-center justify-center text-lg text-gray-400
          rounded-md bg-gradient-to-t from-gray-50 to-white font-nunito"
        >
          <Spinner />
          <p>Refreshing...</p>
        </div>
      )}
    </>
  );
};

export default UpcomingQuizzes;
