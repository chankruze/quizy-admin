/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 10:31:08 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Router from "next/router";
import useSWR from "swr";
import QuizListItem from "../../components/common/QuizListItem";
import RefreshIndicator from "../../components/common/RefreshIndicator";
import { MinifiedQuiz } from "../../types/quiz";
import { fetcher } from "../../utils/fetcher";

const Submission = () => {
  const { data, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/quiz/all`,
    fetcher,
  );

  const redirectToSubmissionPage = (quiz: MinifiedQuiz) => {
    Router.push(`/submission/quiz/${quiz._id}`);
  };

  return (
    <div>
      {/* header */}
      <div className="py-2 flex justify-between border-b">
        <div>
          <p className="text-xs font-nunito uppercase text-gray-400 font-semibold">
            click on a quiz to view submissions
          </p>
          <p className="text-xl font-poppins font-medium text-blue-600">
            All Quizzes
          </p>
        </div>
      </div>
      {/* list all quizzes */}
      {data &&
        data.map((quiz: MinifiedQuiz) => (
          <QuizListItem
            key={quiz._id}
            quiz={quiz}
            onClick={redirectToSubmissionPage}
          />
        ))}
      {/* refresh indicator */}
      {isValidating && <RefreshIndicator />}
    </div>
  );
};

export default Submission;
