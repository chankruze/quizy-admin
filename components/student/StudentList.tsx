/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 17:03:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useMemo, useState } from "react";
import { Student } from "../../types/student";
import StudentTable from "./StudentTable";
import VerificationBadge from "./VerificationBadge";

interface Props {
  students: Student[];
  title: string;
}

const StudentList: React.FC<Props> = ({ students, title }) => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>();

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Regd. No.",
        accessor: "bioData.regdNo",
      },
      {
        Header: "Name",
        accessor: "bioData.name",
      },
      {
        Header: "Branch",
        accessor: "bioData.branch",
      },
      {
        Header: "Semester",
        accessor: "bioData.semester",
      },
      {
        Header: "Status",
        accessor: "verification",
        Cell: ({ value }: { value: string }) => {
          return <VerificationBadge verification={value} />;
        },
        disableSortBy: true,
      },
    ],
    [],
  );

  return (
    <div>
      <StudentTable columns={columns} data={students} title={title} />
    </div>
  );
};

export default StudentList;
