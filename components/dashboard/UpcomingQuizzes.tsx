/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 29 2022 16:16:37 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import useSWR from "swr";
import { MinifiedQuiz } from "../../types/quiz";
import { fetcher } from "../../utils/fetcher";
import Spinner from "../common/Spinner";
import QuizListItem from "../common/QuizListItem";

const UpcomingQuizzes = () => {
  const { data, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/quiz/upcoming/5`,
    fetcher,
  );

  return (
    <>
      <p className="font-montserrat font-semibold py-2 text-gray-500">
        Latest Quizzes
      </p>
      <div>
        {data &&
          data.length > 0 &&
          data.map((quiz: MinifiedQuiz) => (
            <QuizListItem key={quiz._id} quiz={quiz} />
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
