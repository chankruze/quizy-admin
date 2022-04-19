/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 16:55:57 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useCallback, useEffect, useState } from "react";
import { Student } from "../../types/student";
import ContextMenu from "../ContextMenu";

interface Props {
  student: Student;
  onClick: (student: Student) => void;
  selected: boolean;
}

const StudentCard: React.FC<Props> = ({ student, onClick, selected }) => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 256, y: 0 });
  const [show, setShow] = useState(false);

  const { bioData } = student;

  const handleContextMenu = useCallback(
    (event) => {
      // console.log(event.pageX, event.pageY);
      event.preventDefault();

      // fixed x axis
      // TODO: fix y axis
      if (event.pageX + 192 > window.innerWidth) {
        setAnchorPoint({
          x: event.pageX - 192,
          y: event.pageY,
        });
      } else {
        setAnchorPoint({
          x: event.pageX,
          y: event.pageY,
        });
      }

      setShow(true);
    },
    [setAnchorPoint, setShow],
  );

  const handleClick = useCallback(() => setShow(false), [show]);

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      className={`flex items-center p-3 justify-between border-b-[1px] ${
        selected && "bg-green-100"
      }`}
      onClick={() => onClick(student)}
    >
      <p>{bioData.regdNo}</p>
      <p>{bioData.name}</p>
      <p>{bioData.email}</p>
      <p>{bioData.branch}</p>
      {show && selected && (
        <ContextMenu anchorPoint={anchorPoint} data={student} />
      )}
    </div>
  );
};

export default StudentCard;
