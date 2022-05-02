/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 15 2022 09:25:11 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import axios from "axios";
import Router from "next/router";
import { MdDelete, MdEdit } from "react-icons/md";
import { MinifiedQuiz } from "../../types/quiz";
import ActionButton from "../common/ActionButton";

interface QuizCardProps {
  quiz: MinifiedQuiz;
  onClick: (quiz: MinifiedQuiz) => void;
  selected: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onClick, selected }) => {
  // edit a quiz
  const handleEditClick = () => {
    Router.push(`/quiz/${quiz._id}/edit`);
  };

  // delete a quiz
  const handleDeleteClick = () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/quiz/${quiz._id}`)
      .then(() => {
        Router.push("/quiz");
      });
  };

  return (
    <div
      className={`flex items-center p-3 border-b ${selected && "bg-green-100"}`}
      onClick={() => onClick(quiz)}
    >
      <div className="flex-1 flex items-center gap-2">
        <p className="text-sm bg-yellow-100 px-2 rounded-md font-nunito">
          {quiz.semester}
        </p>
        <p className="text-sm bg-blue-100 px-2 rounded-md font-nunito">
          {quiz.branch}
        </p>
        <p className="font-poppins">{quiz.title}</p>
      </div>
      {/* actions menu (if selected) */}
      {selected && (
        <div className="flex gap-4">
          <ActionButton
            icon={MdDelete}
            label="Delete"
            onClick={handleDeleteClick}
          />
          <ActionButton icon={MdEdit} label="Edit" onClick={handleEditClick} />
        </div>
      )}
    </div>
  );
};

export default QuizCard;
