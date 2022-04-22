/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 17:03:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import { Student } from "../../types/student";
import StudentCard from "./StudentCard";

interface Props {
  students: Student[];
  verificationBadge?: boolean;
  showActions?: boolean;
}

const StudentList: React.FC<Props> = ({
  students,
  verificationBadge,
  showActions,
}) => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>();

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      {students.map((student, _idx) => (
        <StudentCard
          key={_idx}
          student={student}
          onClick={handleStudentClick}
          selected={student.bioData?.regdNo === selectedStudent?.bioData.regdNo}
          verificationBadge={verificationBadge}
          showActions={showActions}
        />
      ))}
    </div>
  );
};

export default StudentList;
