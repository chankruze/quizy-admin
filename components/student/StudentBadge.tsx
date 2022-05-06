/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 20 2022 21:10:43 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const colors: {
  [key: string]: string;
} = {
  CSE: "bg-blue-200",
  ECE: "bg-green-200",
  EEE: "bg-yellow-200",
  ME: "bg-orange-200",
  CE: "bg-purple-200",
  IT: "bg-red-200",
  1: "bg-blue-200",
  2: "bg-green-200",
  3: "bg-yellow-200",
  4: "bg-orange-200",
  5: "bg-purple-200",
  6: "bg-red-200",
};

interface Props {
  data: string;
}

const StudentBadge = ({ data }: Props) => {
  return (
    <p className={`px-2 rounded-md font-nunito text-sm ${colors[data]}`}>
      {data}
    </p>
  );
};

export default StudentBadge;
