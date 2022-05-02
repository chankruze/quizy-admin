/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 01 2022 23:14:38 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";
import RefreshIndicator from "../../../components/common/RefreshIndicator";
import SubmissionListItem from "../../../components/common/SubmissionListItem";
import { MinifiedSubmission } from "../../../types/submission";
import { useState } from "react";
import IconButton from "../../../components/common/IconButton";
import { MdDownload } from "react-icons/md";
import { NextPageContext } from "next";
import axios from "axios";
import { Quiz } from "../../../types/quiz";

interface Props {
  quiz: Quiz;
}

const QuizSubmissions = ({ quiz }: Props) => {
  const [selectedSubmission, setSelectedSubmission] =
    useState<MinifiedSubmission | null>(null);

  const { data, isValidating } = useSWR(
    quiz
      ? `${process.env.NEXT_PUBLIC_API_URL}/submission/quiz/${quiz._id}`
      : null,
    fetcher,
  );

  const selectSubmission = (submission: MinifiedSubmission) => {
    setSelectedSubmission((prev) =>
      !prev || prev._id !== submission._id ? submission : null,
    );
  };

  return (
    <div>
      {/* modal */}
      {/* header */}
      <div className="py-2 flex justify-between">
        <div>
          <p className="text-xs font-nunito uppercase text-gray-400 font-semibold">
            All submissions
          </p>
          <p className="text-xl font-poppins font-medium text-blue-600">
            {quiz && quiz.title} ({quiz.questionsCount} Marks)
          </p>
        </div>
        <div className="flex items-center">
          <IconButton btnType="success">
            <MdDownload size={24} />
            <span className="font-nunito">download all</span>
          </IconButton>
        </div>
      </div>
      {/* list all submissions */}
      {data &&
        data.length > 0 &&
        data.map((submission: MinifiedSubmission) => (
          <SubmissionListItem
            key={submission._id}
            onClick={selectSubmission}
            selected={submission._id === selectedSubmission?._id}
            submission={submission}
            questions={quiz && quiz.questions}
          />
        ))}
      {/* refresh indicator */}
      {isValidating && <RefreshIndicator />}
    </div>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { quizId } = context.query;
  let quiz: Quiz | null = null;

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/quiz/${quizId}`,
    );
    quiz = data;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      quiz,
    },
  };
}

export default QuizSubmissions;
