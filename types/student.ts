/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 17:03:49 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

type Mark = {
    testId: string;
    securedMarks: number;
    maximumMarks: number;
};

export type StudentType = {
    name: string;
    enrollmentNo: string;
    branch: string;
    email: string;
    _id?: string;
    marks?: Array<Mark>;
};
