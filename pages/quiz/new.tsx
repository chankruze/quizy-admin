/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 13 2022 08:32:42 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { FieldArray, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import Divider from "../../components/common/Divider";
import Input from "../../components/formik-controls/Input";
import Select from "../../components/formik-controls/Select";
import SubmitButton from "../../components/formik-controls/SubmitButton";
import TextArea from "../../components/formik-controls/TextArea";
import { MdAdd, MdDelete } from "react-icons/md";

const optionData = [
  {
    label: "Option A",
    value: "",
    answer: 0,
  },
  {
    label: "Option B",
    value: "",
    answer: 1,
  },
  {
    label: "Option C",
    value: "",
    answer: 2,
  },
  {
    label: "Option D",
    value: "",
    answer: 3,
  },
];

const questionData = {
  title: "",
  options: optionData,
  answer: 0,
};

const semesters = [
  {
    label: "-- Select Semester --",
    value: "",
  },
  {
    value: "1",
    label: "1st",
  },
  {
    value: "2",
    label: "2nd",
  },
  {
    value: "3",
    label: "3rd",
  },
  {
    value: "4",
    label: "4th",
  },
  {
    value: "5",
    label: "5th",
  },
  {
    value: "6",
    label: "6th",
  },
  {
    value: "7",
    label: "7th",
  },
];

const branches = [
  {
    label: "-- Select Branch --",
    value: "",
  },
  {
    label: "Computer Science & Engineering",
    value: "CSE",
  },
  {
    label: "Electronics & Communication Engineering",
    value: "ECE",
  },
  {
    label: "Electrical & Electronics Engineering",
    value: "EEE",
  },
  {
    label: "Mechanical Engineering",
    value: "ME",
  },
  {
    label: "Civil Engineering",
    value: "CE",
  },
  {
    label: "Information Technology",
    value: "IT",
  },
];

const NewQuiz = () => {
  const initialValues = {
    title: "",
    description: "",
    semester: "",
    branch: "",
    questions: [questionData],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    semester: Yup.string().required("Semester is required"),
    branch: Yup.string().required("Branch is required"),
    questions: Yup.array()
      .of(
        Yup.object({
          title: Yup.string().required("Question title is required"),
          options: Yup.array().of(
            Yup.object({
              value: Yup.string().required("Option value is required"),
            }),
          ),
          answer: Yup.number().required("Answer is required"),
        }),
      )
      .required("Must add a question"),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: FormikValues, formikBag: any) => {
    // TODO: submit the form to the server
    setTimeout(() => {
      // simulate server latency
      console.log(values);
      // onSubmit is async hence we don't need to call setSubmitting(false)
      //   formikBag.setSubmitting(false);
      formikBag.resetForm();
    }, 5000);
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

            <div className="flex flex-wrap items-center">
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
