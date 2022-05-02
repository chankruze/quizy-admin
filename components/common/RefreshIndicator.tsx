/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 01 2022 23:46:25 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Spinner from "./Spinner";

const RefreshIndicator = () => {
  return (
    <div
      className="p-4 flex items-center justify-center text-lg text-gray-400 
      rounded-md bg-gradient-to-t from-gray-50 to-white font-nunito"
    >
      <Spinner />
      <p>Refreshing...</p>
    </div>
  );
};

export default RefreshIndicator;
