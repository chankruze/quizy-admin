import { MinifiedQuiz } from "../types/quiz";
import { Result } from "../types/submission";

interface Props {
  quiz: MinifiedQuiz;
  results: Result[];
  createdAt: string;
}

const submissionsTemplate = ({ quiz, results, createdAt }: Props): string => {
  return `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>All Submissions of ${quiz.title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Montserrat:wght@700&family=Nunito:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <style>
      * { padding: 0; margin: 0; } #submissions-box { padding: 8px; } #header {
      padding: 8px 0; display: flex; justify-content: space-between;
      align-items: center; font-family: Arial, Helvetica, sans-serif; } #quiz h1
      { font-family: "Montserrat", sans-serif; color: #0091ff; } #quiz p {
      font-family: "Nunito", sans-serif; font-weight: 500; color: #393939;
      font-weight: 600; } #quiz p span { color: #000; font-weight: 500; } #brand
      h1 { display: flex; align-items: center; font-family: "Mochiy Pop One",
      sans-serif; color: #0091ff; } #brand p { font-family: "Nunito",
      sans-serif; } #logo { height: 40px; } #submissions { font-family: Arial,
      Helvetica, sans-serif; border-collapse: collapse; width: 100%; }
      #submissions td, #submissions th { border: 1px solid #ddd; padding: 8px; }
      #submissions tr:nth-child(even) { background-color: #f2f2f2; }
      #submissions tr:hover { background-color: #ddd; } #submissions th {
      padding-top: 12px; padding-bottom: 12px; text-align: left;
      background-color: #0091ff; color: white; } #timestamp{ font-family:
      "Nunito", sans-serif; }
    </style>
  </head>
  <body>
    <div id="submissions-box">
      <!-- header -->
      <div id="header">
        <!-- left -->
        <div id="quiz">
          <h1>${quiz.title}</h1>
          <p>Semester: <span>${quiz.semester}</span></p>
          <p>Branch: <span>${quiz.branch}</span></p>
          <p>No. of questions: <span>${quiz.questionsCount}</span></p>
        </div>
        <!-- right -->
        <div id="brand">
          <h1>
            <img
              id="logo"
              src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
            />
            Quizy
          </h1>
          <p>Tests made easier & secure!</p>
        </div>
      </div>
      <!-- submissions table -->
      <table id="submissions">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Regd No.</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        ${results.map((result, index: number) => {
          return `
          <tr>
            <td>${index + 1}</td>1
            <td>${result.regdNo}</td>
            <td>${result.name}</td>
            <td>${result.score}</td>
            <td>${result.submissionDate}</td>
          </tr>
          `;
        })}
        </tbody>
      </table>
      <div>
        <p class="timestamp">${createdAt}</p>
      </div>
    </div>
  </body>
</html>
`;
};

export default submissionsTemplate;
