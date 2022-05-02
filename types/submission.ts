/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 01 2022 23:44:08 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export type Answer = {
  [questionId: string]: string;
};

export type MinifiedSubmission = {
  _id: string;
  date: Date;
  studentId: string;
  quizId: string;
};

export type Submission = {
  _id?: string;
  quizId: string;
  studentId: string;
  answers: Answer;
  date: string;
};
