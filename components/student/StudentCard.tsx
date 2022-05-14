/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 16:55:57 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { MdCheck, MdClear, MdVisibility } from "react-icons/md";
import { Student } from "../../types/student";
import { padding, handleVerificationClick, deleteStudent } from "../../utils";
import ActionButton from "../common/ActionButton";
import StudentBadge from "./StudentBadge";
import { useState } from "react";
import StudentModal from "./StudentModal";

interface Props {
  index: number;
  student: Student;
  onClick: (student: Student) => void;
  selected: boolean;
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);
  const viewBioData = () => setModalIsOpen(true);

  return (
    <div
      className={`flex items-center p-2 border-b cursor-pointer
      ${selected && "bg-sky-100"}`}
      onClick={() => onClick(student)}
    >
      <StudentModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        student={student}
      />
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
          <StudentBadge data={bioData.branch} />
          {/* semester */}
          <StudentBadge data={bioData.semester} />
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
            <>
              <ActionButton
                icon={MdVisibility}
                label="bio-data"
                color="text-blue-500"
                onClick={viewBioData}
              />
              <ActionButton
                icon={MdClear}
                label="Reject"
                color="text-red-500"
                onClick={() =>
                  handleVerificationClick(student._id as string, "rejected")
                }
              />
            </>
          )}
          {/* if rejected show only approve */}
          {(student.verification === "rejected" ||
            student.verification === "pending") && (
            <ActionButton
              icon={MdCheck}
              label="Approve"
              color="text-green-500"
              onClick={() =>
                handleVerificationClick(student._id as string, "verified")
              }
            />
          )}
          {/* if rejected also show delete button */}
          {student.verification === "rejected" && (
            <>
              <ActionButton
                icon={MdVisibility}
                label="bio-data"
                color="text-blue-500"
                onClick={viewBioData}
              />
              <ActionButton
                icon={MdClear}
                label="Delete"
                color="text-red-500"
                onClick={() => deleteStudent(student._id as string)}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentCard;
