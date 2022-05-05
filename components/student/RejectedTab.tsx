/*
Author: chankruze (chankruze@gmail.com)
Created: Thu May 05 2022 20:18:06 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { useState } from "react";
import { GoCheck } from "react-icons/go";
import useSWR from "swr";
import { Student } from "../../types/student";
import { fetcher } from "../../utils/fetcher";
import Spinner from "../common/Spinner";
import StudentCard from "./StudentCard";

const RejectedTab = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const {
    data: students,
    isValidating,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/student/all/verification/rejected`,
    fetcher,
  );

  const handleStudentClick = (student: Student) => {
    setSelectedStudent((prev) =>
      !prev || prev._id !== student._id ? student : null,
    );
  };

  if (error) return <div>failed to load</div>;

  return (
    <div className="w-full">
      {students && students.length > 0 ? (
        students.map((student: Student, _idx: number) => (
          <StudentCard
            key={student._id}
            index={_idx + 1}
            student={student}
            onClick={handleStudentClick}
            selected={student._id === selectedStudent?._id}
            showActions
          />
        ))
      ) : (
        <div className="flex items-center justify-center p-4">
          <GoCheck size={48} className="text-blue-500" />
          <p className="ml-2 text-xl capitalize">
            No biodata verification pending
          </p>
        </div>
      )}
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

export default RejectedTab;
