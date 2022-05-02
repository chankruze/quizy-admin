/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 01 2022 20:22:31 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import moment from "moment";
import { MinifiedQuiz } from "../../types/quiz";
import Badge from "./Badge";

interface QuizListItemProps {
  quiz: MinifiedQuiz;
  onClick?: (quiz: MinifiedQuiz) => void;
}

const QuizListItem: React.FC<QuizListItemProps> = ({ quiz, onClick }) => {
  const isExpired = moment(quiz.date).isBefore(moment());

  return (
    <div
      className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer"
      onClick={onClick ? () => onClick(quiz) : undefined}
    >
      <div className="flex-1 flex items-center gap-2">
        <Badge>{moment(quiz.date).format("MMM DD YYYY, hh:mm A")}</Badge>
        <Badge bgColor="bg-yellow-100">{quiz.semester}</Badge>
        <Badge bgColor="bg-blue-100">{quiz.branch}</Badge>
        <p className={`font-poppins ${isExpired && "line-through"}`}>
          {quiz.title}
        </p>
        {isExpired ? (
          <Badge
            bgColor="bg-red-500"
            color="text-white"
            textSize="text-xs"
            uppercase
          >
            expired
          </Badge>
        ) : (
          <Badge
            bgColor="bg-green-500"
            color="text-white"
            textSize="text-xs"
            uppercase
          >
            upcoming
          </Badge>
        )}
      </div>
    </div>
  );
};

export default QuizListItem;
