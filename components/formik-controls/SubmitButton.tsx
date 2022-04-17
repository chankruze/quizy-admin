/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Apr 14 2022 21:23:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Spinner from "./Spinner";

interface Props {
  label: string;
  isDisabled: boolean;
  isSubmitting: boolean;
}

const SubmitButton: React.FC<Props> = ({ label, isDisabled, isSubmitting }) => {
  return (
    <button
      type="submit"
      className="w-full flex items-center gap-1 justify-center capitalize p-3 rounded-md 
      text-white bg-green-600 hover:bg-green-600/90 duration-200 disabled:bg-gray-200
      disabled:cursor-not-allowed"
      disabled={isDisabled}
    >
      {isSubmitting && <Spinner />}
      <p className="text-lg">{label}</p>
    </button>
  );
};

export default SubmitButton;
