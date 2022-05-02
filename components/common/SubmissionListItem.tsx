/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 01 2022 23:42:34 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import moment from "moment";
import useSWR from "swr";
import { MinifiedSubmission } from "../../types/submission";
import { fetcher } from "../../utils/fetcher";
import Badge from "./Badge";

interface SubmissionListItemProps {
  submission: MinifiedSubmission;
}

const SubmissionListItem: React.FC<SubmissionListItemProps> = ({
  submission,
}) => {
  const { data: student, isValidating } = useSWR(
    submission
      ? `${process.env.NEXT_PUBLIC_API_URL}/student/${submission.studentId}`
      : null,
    fetcher,
  );

  return (
    <div
      className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer"
      //   onClick={onClick ? () => onClick(quiz) : undefined}
    >
      <div className="flex-1 flex items-center gap-2">
        <Badge>{moment(submission.date).format("MMM DD YYYY, hh:mm A")}</Badge>
        {student ? (
          <p className="font-poppins">{student.bioData.name}</p>
        ) : (
          <p className="font-poppins animate-bounce">...</p>
        )}
      </div>
    </div>
  );
};

export default SubmissionListItem;
