/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 15 2022 09:56:54 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { IconType } from "react-icons";

interface Props {
  icon?: IconType;
  label?: string;
  onClick?: (x: any) => any;
  color?: string;
}

const ActionButton: React.FC<Props> = (props) => {
  return (
    <div
      className={`flex flex-wrap items-center cursor-pointer gap-1 hover:opacity-60
      ${props.color && props.color}`}
      onClick={props.onClick}
    >
      {props.icon && <props.icon size={20} />}
      {props.label && (
        <p className="uppercase text-xs font-medium font-poppins">
          {props.label}
        </p>
      )}
    </div>
  );
};

export default ActionButton;
