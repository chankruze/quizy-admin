/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 16:55:57 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import axios from "axios";
import Router from "next/router";
import { MdCheck, MdClear } from "react-icons/md";
import { Student } from "../../types/student";
import ActionButton from "../ActionButton";
import BranchBadge from "./BranchBadge";
import VerificationBadge from "./VerificationBadge";

interface Props {
  student: Student;
  onClick: (student: Student) => void;
  selected: boolean;
  verificationBadge?: boolean;
  showActions?: boolean;
}

const StudentCard: React.FC<Props> = ({
  student,
  onClick,
  selected,
  verificationBadge,
  showActions,
}) => {
  const { bioData } = student;

  const handleVerificationClick = async (status: string) => {
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/student/${student._id}/verification/${status}`,
    );
    Router.reload();
  };

  return (
    <div
      className={`flex items-center p-3 border-b ${selected && "bg-green-100"}`}
      onClick={() => onClick(student)}
    >
      <div className="flex-1 flex items-center gap-2">
        {/* regd. no. */}
        <p className="bg-yellow-200 px-2 rounded-md font-medium">
          {bioData.regdNo}
        </p>
        {/* branch */}
        <BranchBadge branch={bioData.branch} />
        {/* name */}
        <p className="font-poppins">{bioData.name}</p>
        {/* verification */}
        {verificationBadge && (
          <VerificationBadge verification={student.verification} />
        )}
      </div>
      {/* actions menu (if selected) */}
      {selected && showActions && (
        <div className="flex gap-4">
          <ActionButton
            icon={MdClear}
            label="Reject"
            onClick={() => handleVerificationClick("rejected")}
          />
          <ActionButton
            icon={MdCheck}
            label="Approve"
            onClick={() => handleVerificationClick("verified")}
          />
        </div>
      )}
    </div>
  );
};

export default StudentCard;
