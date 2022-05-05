/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Apr 30 2022 14:21:35 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { useState } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import useSWR from "swr";
import { Student } from "../../types/student";
import { fetcher } from "../../utils/fetcher";
import Spinner from "../common/Spinner";
import StudentCard from "./StudentCard";

const VerifiedTab = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent((prev) =>
      !prev || prev._id !== student._id ? student : null,
    );
  };

  const { data: students, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/student/all/verification/verified`,
    fetcher,
  );

  return (
    <div className="w-full">
      {/* TODo: sort, search options */}
      {/* list students */}
      {students && students.length > 0 ? (
        students.map((student: Student, _idx: number) => (
          <StudentCard
            key={student._id}
            index={_idx + 1}
            student={student}
            onClick={handleStudentClick}
            selected={student._id === selectedStudent?._id}
            showActions
            verificationBadge
          />
        ))
      ) : (
        <div className="flex items-center justify-center p-4">
          <FcDeleteDatabase size={48} />
          <p className="ml-2 text-xl capitalize">No verified students</p>
        </div>
      )}
      {/* data is validating */}
      {isValidating && (
        <div
          className="p-4 flex items-center justify-center text-lg text-gray-400
          rounded-md bg-gradient-to-t from-gray-50 to-white font-nunito"
        >
          <Spinner />
          <p>Refreshing...</p>
        </div>
      )}
    </div>
  );
};

export default VerifiedTab;
