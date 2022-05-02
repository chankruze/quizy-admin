/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 01 2022 23:14:38 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";
import RefreshIndicator from "../../../components/common/RefreshIndicator";
import SubmissionListItem from "../../../components/common/SubmissionListItem";
import { MinifiedSubmission } from "../../../types/submission";

const QuizSubmissions = () => {
  const { quizId } = useRouter().query;

  const { data, isValidating } = useSWR(
    quizId
      ? `${process.env.NEXT_PUBLIC_API_URL}/submission/quiz/${quizId}`
      : null,
    fetcher,
  );

  return (
    <div>
      {/* list all submissions */}
      {data &&
        data.length > 0 &&
        data.map((submission: MinifiedSubmission) => (
          <SubmissionListItem key={submission._id} submission={submission} />
        ))}
      {/* refresh indicator */}
      {isValidating && <RefreshIndicator />}
    </div>
  );
};

export default QuizSubmissions;
