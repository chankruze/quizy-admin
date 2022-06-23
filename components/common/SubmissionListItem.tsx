/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 01 2022 23:42:34 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import moment from "moment";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import useSWR from "swr";
import { Question } from "../../types/quiz";
import { MinifiedSubmission } from "../../types/submission";
import { deleteSubmission } from "../../utils";
import { fetcher } from "../../utils/fetcher";
import ActionButton from "./ActionButton";
import Badge from "./Badge";

interface SubmissionListItemProps {
  submission: MinifiedSubmission;
  questions: Question[];
  onClick: (submission: MinifiedSubmission) => void;
  selected?: boolean;
}

const SubmissionListItem: React.FC<SubmissionListItemProps> = ({
  submission,
  questions,
  onClick,
  selected,
}) => {
  const { data: student, isValidating } = useSWR(
    submission
      ? `${process.env.NEXT_PUBLIC_API_URL}/student/${submission.studentId}`
      : null,
    fetcher,
  );

  return (
    <div
      className={`flex items-center p-3 border-b cursor-pointer ${
        selected ? "bg-green-200" : "hover:bg-gray-100"
      }`}
      onClick={onClick ? () => onClick(submission) : undefined}
    >
      <div className="flex-1 flex items-center gap-2">
        <Badge bgColor="bg-blue-100">
          {moment(submission.date).format("MMM DD YYYY, hh:mm A")}
        </Badge>
        {student ? (
          <>
            <Badge bgColor="bg-pink-100">{student.bioData.regdNo}</Badge>
            <Badge bgColor="bg-yellow-100">{student.bioData.semester}</Badge>
            <Badge bgColor="bg-green-100">{student.bioData.branch}</Badge>
            <p className="font-poppins">{student.bioData.name}</p>
          </>
        ) : (
          <p className="font-poppins animate-bounce">...</p>
        )}
        {selected && (
          <div className="flex gap-4 ml-auto">
            <ActionButton
              icon={MdDelete}
              label="delete"
              color="text-red-500"
              onClick={() =>
                deleteSubmission(submission._id, submission.quizId)
              }
            />
            {/* <ActionButton icon={MdRemoveRedEye} label="view" /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionListItem;
