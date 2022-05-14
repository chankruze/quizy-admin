/*
Author: chankruze (chankruze@gmail.com)
Created: Sat May 14 2022 15:45:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

interface SelectBoxProps {
  name: string;
  options: { label: string; value: string | number }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ name, options, onChange }) => {
  return (
    <select
      name={name}
      className="p-2 rounded-md border focus:outline-none focus:shadow-outline focus:border-green-400"
      onChange={onChange}
    >
      {options.map((option, _idx) => (
        <option key={_idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
