/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 10:29:52 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import useSWR from "swr";
import StudentList from "../../components/student/StudentList";
import { fetcher } from "../../utils/fetcher";

const Student = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/student/semester/6`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="p-2">
      <StudentList students={data.students} />
    </div>
  );
};

export default Student;
