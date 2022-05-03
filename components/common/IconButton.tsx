/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 17 2022 09:15:53 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

interface Props extends React.HTMLProps<HTMLDivElement> {
  btnType: "primary" | "secondary" | "danger" | "warning" | "success";
  onClick?: any;
  border?: boolean;
}

const IconButton: React.FC<Props> = ({
  children,
  btnType,
  onClick,
  border = false,
}) => {
  let btnStyle = "";

  switch (btnType) {
    case "primary":
      btnStyle = `bg-blue-600 text-white hover:bg-blue-700`;
      break;
    case "secondary":
      btnStyle = `text-blue-600 ${
        border && "border"
      } bg-white hover:bg-gray-50`;
      break;
    case "success":
      btnStyle = `text-white bg-green-600 hover:bg-green-600/90`;
      break;
    case "warning":
      btnStyle = `text-white bg-yellow-600 hover:bg-yellow-600/90`;
      break;
    case "danger":
      btnStyle = `text-white bg-red-600 hover:bg-red-600/90`;
      break;
    default:
      break;
  }

  return (
    <div
      className={`flex items-center justify-center gap-1 p-3 font-medium 
      ${btnStyle} rounded capitalize cursor-pointer transition-all duration-150`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;
