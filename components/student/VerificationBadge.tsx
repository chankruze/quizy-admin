/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 20 2022 21:05:14 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

interface Props {
  verification: string;
}

const VerificationBadge = ({ verification }: Props) => {
  return (
    <p
      className={`w-min uppercase text-xs px-2 py-1 rounded-md 
    text-white ${verification === "verified" ? "bg-green-500" : "bg-red-500"}`}
    >
      {verification}
    </p>
  );
};

export default VerificationBadge;
