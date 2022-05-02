/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 15 2022 09:23:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import useSWR from "swr";
import { MinifiedQuiz } from "../../types/quiz";
import { fetcher } from "../../utils/fetcher";
import QuizCard from "./QuizCard";

const QuizzesList = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<MinifiedQuiz | null>(
    null,
  );

  const handleQuizClick = (quiz: MinifiedQuiz) => {
    setSelectedQuiz(quiz);
  };

  const { data: quizzes, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/quiz/all`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!quizzes) return <div>loading...</div>;

  return (
    <div>
      {quizzes.map((quiz: MinifiedQuiz) => (
        <QuizCard
          key={quiz._id}
          quiz={quiz}
          onClick={handleQuizClick}
          selected={quiz._id === selectedQuiz?._id}
        />
      ))}
    </div>
  );
};

export default QuizzesList;
