/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 13 2022 08:36:35 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Question } from "../types/quiz";
import { Answer } from "../types/submission";

export * from "./matchRoute";

export const calculateScore = (questions: Array<Question>, answers: Answer) => {
  return questions.reduce((prev, question: Question) => {
    if (
      question.options[parseInt(question.answer as string)].id ===
      answers[question.id]
    ) {
      return prev + 1;
    }

    return prev;
  }, 0);
};
