/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 16 2022 18:29:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useEffect, useState } from "react";
import { branches, semesters } from "../../config/academicData";
import { filterSort } from "../../helpers/filter-sort";
import { FilterType, SortType } from "../../types/filter";
import { Student } from "../../types/student";
import SelectBox from "../common/SelectBox";

interface FilterSortStudentsProps {
  students: Student[];
  setFilteredAndSortedStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const FilterSortStudents: React.FC<FilterSortStudentsProps> = ({
  students,
  setFilteredAndSortedStudents,
}) => {
  const [filter, setFilter] = useState<FilterType>({
    branch: "",
    semester: "",
  });

  const [sortby, setSortby] = useState<SortType>({
    field: "",
    order: "ASC",
  });

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
  );
};

export default FilterSortStudents;
