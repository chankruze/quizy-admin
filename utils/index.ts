/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 13 2022 08:36:35 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import axios from "axios";
import moment from "moment";
import { MinifiedQuiz, Question, Quiz } from "../types/quiz";
import { Answer, Result, Submission } from "../types/submission";
import submissionsTemplate from "../templates/submissions";

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

export const downloadSubmissions = async (quiz: Quiz) => {
  // get the submissions
  const { data: submissions } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/submission/quiz/${quiz._id}`,
  );

  // for each submission, get the student details,
  // and then get the answers for each question
  const output = await Promise.all(
    submissions.map(async (submission: Submission) => {
      // the student details
      const { data: student } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/student/${submission.studentId}`,
      );

      return {
        name: student.bioData.name,
        regdNo: student.bioData.regdNo,
        score: calculateScore(quiz.questions, submission.answers),
        submissionDate: moment(submission.date).format(
          "DD MMM YYYY hh:mm:ss a",
        ),
      };
    }),
  );

  const data = {
    results: output as Result[],
    quiz: {
      title: quiz.title,
      semester: quiz.semester,
      branch: quiz.branch,
      questionsCount: quiz.questions.length,
    } as MinifiedQuiz,
    createdAt: moment().format("DD MMM YYYY, hh:mm:ss a"),
  };

  const html = submissionsTemplate(data);

  const options = {
    filename: `quizy_submissions_${quiz._id}.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  if (window !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const html2pdf = require("html2pdf.js");
    html2pdf().from(html).set(options).save();
  }
};
