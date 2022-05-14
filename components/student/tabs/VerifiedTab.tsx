/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Apr 30 2022 14:21:35 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../utils";
// components
import Spinner from "../../common/Spinner";
import StudentCard from "../StudentCard";
// icons
import { FcDeleteDatabase } from "react-icons/fc";
// types
import { Student } from "../../../types/student";
import { branches, semesters } from "../../../config/academicData";
import { FilterType, SortType } from "../../../types/filter";
import { filterSort } from "../../../helpers/filter-sort";
import SelectBox from "../../common/SelectBox";

const VerifiedTab = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const [filter, setFilter] = useState<FilterType>({
    branch: "",
    semester: "",
  });

  const [sortby, setSortby] = useState<SortType>({
    field: "",
    order: "ASC",
  });

  const [filteredAndSortedStudents, setFilteredAndSortedStudents] = useState<
    Student[]
  >([]);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent((prev) =>
      !prev || prev._id !== student._id ? student : null,
    );
  };

  const { data: students, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/student/all/verification/verified`,
    fetcher,
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSortby((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (students) {
      setFilteredAndSortedStudents([...filterSort(students, filter, sortby)]);
    }
  }, [students, sortby, filter]);

  return (
    <div className="w-full">
      {/* TODO: sort, search options */}
      <div className="p-2 border-b bg-gray-50 flex items-center justify-between">
        {/* filter by */}
        <div>
          <p className="py-1 text-xs uppercase font-nunito text-blue-500 font-semibold">
            filter students
          </p>
          <div className="flex gap-2 items-center">
            <SelectBox
              name="branch"
              options={branches}
              onChange={handleFilterChange}
            />
            <SelectBox
              name="semester"
              options={semesters}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        {/* sort by */}
        <div>
          <p className="py-1 text-xs uppercase font-nunito text-blue-500 font-semibold">
            sort students
          </p>
          <div>
            <SelectBox
              name="field"
              options={[
                { label: "Unsorted", value: "unsorted" },
                { label: "Name", value: "name" },
                { label: "Registration No.", value: "regdNo" },
              ]}
              onChange={handleSortChange}
            />
          </div>
        </div>
      </div>
      {/* list students */}
      {filteredAndSortedStudents && filteredAndSortedStudents.length > 0 ? (
        filteredAndSortedStudents.map((student: Student, _idx: number) => (
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
