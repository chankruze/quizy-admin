/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Apr 19 2022 20:05:10 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import useSWR from "swr";
import StudentList from "../../components/student/StudentList";
import { fetcher } from "../../utils/fetcher";
import { FcDeleteDatabase } from "react-icons/fc";

const VerifiedStudents = () => {
  const { data: students, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/student/all/verification/verified`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!students) return <div>loading...</div>;

  return (
    <div className="p-2">
      {students.length > 0 ? (
        <StudentList students={students} />
      ) : (
        <div className="flex items-center justify-center">
          <FcDeleteDatabase size={48} />
          <p className="ml-2 text-xl capitalize">No students found</p>
        </div>
      )}
    </div>
  );
};

export default VerifiedStudents;
