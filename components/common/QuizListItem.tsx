/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 01 2022 20:22:31 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import moment from "moment";
import { FcCalendar } from "react-icons/fc";
import { MinifiedQuiz } from "../../types/quiz";
import Badge from "./Badge";

interface QuizListItemProps {
  quiz: MinifiedQuiz;
  onClick?: (quiz: MinifiedQuiz) => void;
}

const QuizListItem: React.FC<QuizListItemProps> = ({ quiz, onClick }) => {
  const isExpired = moment(quiz.endDate).isBefore(moment());
  const isUpcoming = moment(quiz.endDate).isBefore(moment());
  const isOngoing = moment(moment()).isBetween(
    moment(quiz.startDate),
    moment(quiz.endDate),
  );

  return (
    <div
      className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer"
      onClick={onClick ? () => onClick(quiz) : undefined}
    >
      <div className="flex-1 flex items-center gap-2">
        {/* start date */}
        <Badge bgColor="bg-green-100">
          <FcCalendar size={24} />
          {moment(quiz.startDate).format("MM-DD-YYYY, hh:mm A")}
        </Badge>
        {/* end date  */}
        <Badge bgColor="bg-red-100">
          <FcCalendar size={24} />
          {moment(quiz.endDate).format("MM-DD-YYYY, hh:mm A")}
        </Badge>
        {/* semester */}
        <Badge bgColor="bg-yellow-100">{quiz.semester}</Badge>
        {/* branch */}
        <Badge bgColor="bg-blue-100">{quiz.branch}</Badge>
        {/* title */}
        <p className={`font-poppins ${isExpired && "line-through"}`}>
          {quiz.title}
        </p>
        {/* quiz status */}
        {isExpired && (
          <Badge
            bgColor="bg-red-500"
            color="text-white"
            textSize="text-xs"
            uppercase
          >
            expired
          </Badge>
        )}
        {isUpcoming && (
          <Badge
            bgColor="bg-blue-500"
            color="text-white"
            textSize="text-xs"
            uppercase
          >
            upcoming
          </Badge>
        )}
        {isOngoing && (
          <Badge
            bgColor="bg-green-500"
            color="text-white"
            textSize="text-xs"
            uppercase
          >
            ongoing
          </Badge>
        )}
      </div>
    </div>
  );
};

export default QuizListItem;
