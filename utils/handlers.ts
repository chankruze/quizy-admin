/*
Author: chankruze (chankruze@gmail.com)
Created: Thu May 05 2022 20:03:02 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import axios from "axios";
import { mutate } from "swr";

export const handleVerificationClick = async (
  studentId: string,
  status: string,
) => {
  await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/student/${studentId}/verification/${status}`,
  );

  mutate(
    `${process.env.NEXT_PUBLIC_API_URL}/student/all/verification/rejected`,
  );
  mutate(
    `${process.env.NEXT_PUBLIC_API_URL}/student/all/verification/verified`,
  );
  mutate(`${process.env.NEXT_PUBLIC_API_URL}/student/all/verification/pending`);
};
