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
    `${process.env.NEXT_PUBLIC_API_URL}/student/all`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="p-2">
      {/* TODO:
          1. remove this card and implement table
          2. add pagination
          3. add search
          4. add sorting
      */}
      <StudentList students={data.students} verificationBadge />
    </div>
  );
};

export default Student;
