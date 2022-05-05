/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 16:55:57 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { MdCheck, MdClear } from "react-icons/md";
import { Student } from "../../types/student";
import { padding } from "../../utils";
import { handleVerificationClick } from "../../utils/handlers";
import ActionButton from "../common/ActionButton";
import BranchBadge from "./BranchBadge";

interface Props {
  index: number;
  student: Student;
  onClick: (student: Student) => void;
  selected: boolean;
  verificationBadge?: boolean;
  showActions?: boolean;
}

const StudentCard: React.FC<Props> = ({
  index,
  student,
  onClick,
  selected,
  showActions,
}) => {
  const { bioData } = student;

  return (
    <div
      className={`flex items-center p-2 border-b ${selected && "bg-green-100"}`}
      onClick={() => onClick(student)}
    >
      <div className="flex-1 flex">
        <div className="flex items-center gap-2">
          <p className="text-gray-400 font-mono">
            {padding(index.toString(), 3)}
          </p>
          {/* regd. no. */}
          <p className="bg-yellow-100 px-2 rounded-md font-medium font-mono">
            {bioData.regdNo}
          </p>
          {/* name */}
          <p className="font-poppins">{bioData.name}</p>
          {/* branch */}
          <BranchBadge branch={bioData.branch} />
        </div>
        {/* verification */}
        {/* {verificationBadge && (
          <VerificationBadge verification={student.verification} />
        )} */}
      </div>
      {/* actions menu (if selected) */}
      {selected && showActions && (
        <div className="flex gap-4">
          {/* if pending show approve and reject */}
          {/* if verified show only reject */}
          {(student.verification === "verified" ||
            student.verification === "pending") && (
            <ActionButton
              icon={MdClear}
              label="Reject"
              onClick={() =>
                handleVerificationClick(student._id as string, "rejected")
              }
            />
          )}
          {/* if rejected show only approve */}
          {(student.verification === "rejected" ||
            student.verification === "pending") && (
            <ActionButton
              icon={MdCheck}
              label="Approve"
              onClick={() =>
                handleVerificationClick(student._id as string, "verified")
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default StudentCard;
