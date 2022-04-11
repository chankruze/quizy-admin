/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 17:03:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import { StudentType } from "../../types/student";
import StudentCard from "./StudentCard";

interface Props {
    students: StudentType[];
}

const StudentList: React.FC<Props> = ({ students }) => {
    const [selectedStudent, setSelectedStudent] = useState<StudentType | null>(
        null,
    );

    const handleStudentClick = (student: StudentType) => {
        setSelectedStudent(student);
    };

    return (
        <div>
            {students.map((student) => (
                <StudentCard
                    key={student.enrollmentNo}
                    student={student}
                    onClick={handleStudentClick}
                    selected={
                        student.enrollmentNo === selectedStudent?.enrollmentNo
                    }
                />
            ))}
        </div>
    );
};

export default StudentList;
