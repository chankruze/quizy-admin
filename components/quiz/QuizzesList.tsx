/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 15 2022 09:23:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import useSWR from "swr";
import { Quiz } from "../../types/quiz";
import { fetcher } from "../../utils/fetcher";
import QuizCard from "./QuizCard";

const QuizzesList = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const handleQuizClick = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
  };

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/quiz/all`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.map((quiz: Quiz) => (
        <QuizCard
          key={quiz.id}
          quiz={quiz}
          onClick={handleQuizClick}
          selected={quiz.id === selectedQuiz?.id}
        />
      ))}
    </div>
  );
};

export default QuizzesList;
