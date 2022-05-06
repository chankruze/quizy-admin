/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 06 2022 07:50:51 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Question } from "../types/quiz";
import { Answer } from "../types/submission";

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
