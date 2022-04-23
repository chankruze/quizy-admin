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
      className={`px-2 rounded-md font-nunito text-sm
      ${verification === "verified" ? "bg-green-100" : "bg-red-100"}`}
    >
      {verification}
    </p>
  );
};

export default VerificationBadge;
