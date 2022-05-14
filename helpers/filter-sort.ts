/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 14 2022 13:41:16 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { FilterType, SortType } from "../types/filter";
import { Student } from "../types/student";

export const filterSort = (
  students: Student[],
  filter: FilterType,
  sortby: SortType,
): Student[] => {
  // filter the students
  const filteredStudents = students.filter((student: Student) => {
    // if only one of the filter is selected, then return true
    if (
      (filter.branch === "" || student.bioData.branch === filter.branch) &&
      (filter.semester === "" || student.bioData.semester === filter.semester)
    ) {
      return true;
    }
    return false;
  });
  // sort the filtered students
  const sortedStudents = filteredStudents.sort(
    (studentA: Student, studentB: Student) => {
      if (sortby.field === "regdNo") {
        return studentA.bioData.regdNo.localeCompare(studentB.bioData.regdNo);
      }

      if (sortby.field === "name") {
        return studentA.bioData.name.localeCompare(studentB.bioData.name);
      }

      return 0;
    },
  );

  return sortedStudents;
};
