/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 13 2022 08:36:35 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import axios from "axios";
import moment from "moment";
import { Question, Quiz } from "../types/quiz";
import { Answer, Result, Submission } from "../types/submission";

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

const jsonToCSV = (results: Result[], keys: string[], headers: string[]) => {
  let csv = `${headers.join(",")}\n`;

  results.map((result: Result) => {
    const data = keys.map((key, _kIdx) => (key ? result[key] : _kIdx + 1));
    csv += `${data.join(",")}\n`;
  });

  return csv;
};

export const downloadSubmissions = async (quiz: Quiz) => {
  // get the submissions
  const { data: submissions } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/submission/quiz/${quiz._id}`,
  );

  // for each submission, get the student details,
  // and then get the answers for each question
  const results: Result[] = await Promise.all(
    submissions.map(async (submission: Submission) => {
      // the student details
      const { data: student } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/student/${submission.studentId}`,
      );

      return {
        name: student.bioData.name,
        regdNo: student.bioData.regdNo,
        score: calculateScore(quiz.questions, submission.answers),
        submissionDate: moment(submission.date).format("DD/MM/YYYY HH:MM:SS"),
      };
    }),
  );

  // data for PDF
  // const data = {
  //   results: output as Result[],
  //   quiz: {
  //     title: quiz.title,
  //     semester: quiz.semester,
  //     branch: quiz.branch,
  //     questionsCount: quiz.questions.length,
  //   } as MinifiedQuiz,
  //   createdAt: moment().format("DD MMM YYYY, hh:mm:ss a"),
  // };

  const headers = ["SL No.", "Regd No.", "Name", "Score", "Date"];
  const keys = ["", "regdNo", "name", "score", "submissionDate"];
  const csv = jsonToCSV(results, keys, headers);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `quizy_submissions_${quiz.semester}_${quiz.branch}_${quiz.title
    .split(" ")
    .join("_")}.csv`;
  a.click();

  // TODO: create proper PDF and download
  // const html = submissionsTemplate(data);

  // const options = {
  //   filename: `quizy_submissions_${quiz._id}.pdf`,
  //   image: { type: "jpeg", quality: 1 },
  //   html2canvas: { scale: 2 },
  //   jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  // };

  // if (window !== undefined) {
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires
  //   const html2pdf = require("html2pdf.js");
  //   html2pdf().from(html).set(options).save();
  // }
};

export const padding = (str: string, length: number) => {
  return str.padStart(length, "0");
};
