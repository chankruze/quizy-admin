/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 29 2022 15:57:10 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

interface Props {
  title: string;
  dataUrl: string;
  color?: string;
  bg?: string;
}

const StatsCard: React.FC<Props> = ({ title, dataUrl, color, bg }) => {
  const [count, setCount] = React.useState(0);

  const { data, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}${dataUrl}`,
    fetcher,
  );

  useEffect(() => {
    if (data) {
      setCount(data.count);
    }
  }, [data]);

  return (
    <div
      className={`flex-1 p-6 flex flex-col rounded-md shadow-xl ${
        bg ? bg : "bg-gradient-to-bl from-green-400 to-blue-500"
      }`}
    >
      <p className={`text-6xl font-bold ${color ? color : "text-white"}`}>
        {isValidating ? <p className="animate-bounce">...</p> : count}
      </p>
      <p className="capitalize text-lg pt-2 font text-white">{title}</p>
    </div>
  );
};

export default StatsCard;
