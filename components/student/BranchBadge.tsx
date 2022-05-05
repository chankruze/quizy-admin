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
};

interface Props {
  branch: string;
}

const BranchBadge = ({ branch }: Props) => {
  return (
    <p
      className={`px-2 rounded-md font-nunito text-xs ${colors[branch]}`}
    >
      {branch}
    </p>
  );
};

export default BranchBadge;
