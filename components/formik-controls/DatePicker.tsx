/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 15 2022 19:28:22 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Field } from "formik";
import { forwardRef } from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from "./Label";

interface Props {
  id: string;
  name: string;
  label: string;
}

const DatePicker: React.FC<Props> = ({ label, id, name }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const CustomInput = ({ value, onClick }, ref) => (
    <div className="flex items-center rounded-md gap-4 w-max" ref={ref}>
      <Label htmlFor={id} value={label} />
      <p
        className="py-2 px-3 rounded-md border cursor-pointer 
        hover:bg-gray-100 duration-150"
        onClick={onClick}
      >
        {value}
      </p>
    </div>
  );

  const DatePickerInput = forwardRef(CustomInput);

  return (
    <div className="mt-2">
      <Field name={name}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {({ field, form }) => (
          <DateView
            {...field}
            {...form}
            selected={field.value}
            onChange={(date: Date) => form.setFieldValue(field.name, date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy hh:mm aa"
            id={id}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            customInput={<DatePickerInput />}
          />
        )}
      </Field>
    </div>
  );
};

export default DatePicker;
