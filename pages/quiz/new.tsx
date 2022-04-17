/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 13 2022 08:32:42 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Router from "next/router";
import * as Yup from "yup";
import axios from "axios";
// components
import { FieldArray, Form, Formik, FormikValues } from "formik";
import Divider from "../../components/common/Divider";
import Input from "../../components/formik-controls/Input";
import Select from "../../components/formik-controls/Select";
import SubmitButton from "../../components/formik-controls/SubmitButton";
import TextArea from "../../components/formik-controls/TextArea";
import DatePicker from "../../components/formik-controls/DatePicker";
// icons
import { MdAdd, MdDelete } from "react-icons/md";
// data
import { branches, semesters } from "../../config/academicData";

const optionData = [
  {
    label: "Option A",
    value: "",
  },
  {
    label: "Option B",
    value: "",
  },
  {
    label: "Option C",
    value: "",
  },
  {
    label: "Option D",
    value: "",
  },
];

const correctOptionData = [
  {
    label: "-- Select Correct Option --",
    value: "",
  },
  {
    label: "Option A",
    value: 0,
  },
  {
    label: "Option B",
    value: 1,
  },
  {
    label: "Option C",
    value: 2,
  },
  {
    label: "Option D",
    value: 3,
  },
];

const questionData = {
  title: "",
  options: optionData,
  answer: "",
};

const NewQuiz = () => {
  const initialValues = {
    title: "",
    description: "",
    semester: "",
    branch: "",
    date: new Date(),
    questions: [questionData],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    semester: Yup.string().required("Semester is required"),
    branch: Yup.string().required("Branch is required"),
    date: Yup.string().required("Date is required"),
    questions: Yup.array()
      .of(
        Yup.object({
          title: Yup.string().required("Title is required"),
          options: Yup.array().of(
            Yup.object({
              value: Yup.string().required("Value is required"),
            }),
          ),
          answer: Yup.string().required("Answer is required"),
        }),
      )
      .required("Must add a question"),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: FormikValues, formikBag: any) => {
    // polish values
    // send to server
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/quiz/new`, values)
      .then((res) => {
        if (res.status === 201) {
          formikBag.setSubmitting(false);
          formikBag.resetForm();
          Router.push("/quiz");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikHelpers) => (
          <Form className="bg-white flex flex-col gap-4">
            {/* (input) quiz title */}
            <Input
              id="title"
              name="title"
              placeholder="Class Test - 2 (Cloud Computing)"
              label="Quiz Title"
            />

            {/* (textarea) quiz description */}
            <TextArea
              id="description"
              name="description"
              placeholder="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
              label="Quiz Description"
            />

            <div className="flex flex-wrap items-center gap-4">
              {/* (select) quiz semester */}
              <Select
                id="semester"
                name="semester"
                options={semesters}
                label="Semester"
              />

              {/* (select) quiz branch */}
              <Select
                id="branch"
                name="branch"
                options={branches}
                label="Branch"
              />
            </div>

            <DatePicker id="date" name="date" label="Test Date & Time" />

            <Divider />

            {/* quiz questions */}
            <div>
              {/* <QuestionsFieldArray /> */}
              <FieldArray name="questions">
                {(arrayHelpers) => (
                  <div>
                    {formikHelpers.values.questions &&
                      formikHelpers.values.questions.length > 0 &&
                      formikHelpers.values.questions.map((_, qIdx) => (
                        <div key={qIdx} className="mb-4">
                          {/* (input) question {qIdx} */}
                          <Input
                            id={`questions-${qIdx}-title`}
                            name={`questions[${qIdx}].title`}
                            placeholder={`Question ${qIdx + 1}`}
                            label={`Question #${qIdx + 1}`}
                          />

                          {/* options */}
                          <div className="grid grid-cols-2 gap-4">
                            {optionData.map((option, oIdx) => (
                              <div key={oIdx}>
                                {/* (input) option */}
                                <Input
                                  id={`question-${qIdx}-option-${oIdx}`}
                                  name={`questions[${qIdx}].options[${oIdx}].value`}
                                  placeholder={option.label}
                                  label={option.label}
                                  smallLabel
                                />
                              </div>
                            ))}
                          </div>

                          {/* correct option */}
                          <div>
                            <Select
                              id={`questions-${qIdx}-answer`}
                              name={`questions[${qIdx}].answer`}
                              options={correctOptionData}
                              label="Correct answer"
                            />
                          </div>

                          {/* (button) remove question */}
                          <div
                            className="mt-2 py-2 px-4 w-max ml-auto flex cursor-pointer text-white
                              rounded-md bg-red-500 hover:bg-red-500/90 capitalize"
                            onClick={() => arrayHelpers.remove(qIdx)}
                          >
                            <MdDelete size={28} />
                            <p className="ml-1">delete</p>
                          </div>
                        </div>
                      ))}

                    {/* (button) add new question */}
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push(questionData)}
                      className="mt-2 py-2 px-4 text-lg b-0 flex justify-center items-center bg-green-600
                        text-white rounded cursor-poiner ml-auto transition duration-200 ease-in-out hover:bg-green-600/90"
                    >
                      <MdAdd size={28} />
                      <p className="ml-2 capitalize">New Question</p>
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>

            {/* (button) submit button */}
            <div>
              <SubmitButton
                label="submit"
                isDisabled={
                  !(formikHelpers.isValid && formikHelpers.dirty) ||
                  formikHelpers.isSubmitting
                }
                isSubmitting={formikHelpers.isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default NewQuiz;
