/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 15 2022 09:23:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import { GoCheck } from "react-icons/go";
import useSWR from "swr";
import { MinifiedQuiz } from "../../types/quiz";
import { fetcher } from "../../utils/fetcher";
import Spinner from "../common/Spinner";
import QuizCard from "./QuizCard";

const QuizzesList = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<MinifiedQuiz | null>(null);

  const handleQuizClick = (quiz: MinifiedQuiz) => {
    setSelectedQuiz((prev) => (!prev || prev._id !== quiz._id ? quiz : null));
  };

  const {
    data: quizzes,
    isValidating,
    error,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/quiz/all`, fetcher);

  if (error) return <div>failed to load</div>;

  return (
    <div>
      {quizzes ? (
        quizzes.map((quiz: MinifiedQuiz) => (
          <QuizCard
            key={quiz._id}
            quiz={quiz}
            onClick={handleQuizClick}
            selected={quiz._id === selectedQuiz?._id}
          />
        ))
      ) : (
        <div className="flex items-center justify-center p-4">
          <GoCheck size={48} className="text-blue-500" />
          <p className="ml-2 text-xl capitalize">No quizzes found</p>
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

export default QuizzesList;
