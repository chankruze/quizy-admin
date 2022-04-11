/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 05:59:10 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import sidebarOptions from "../../../config/sidebarOptions";
import Option from "./Option";

const Top = () => {
    return (
        <div className="w-full p-2 flex-1 bg-white rounded-md">
            {sidebarOptions.map((option) => (
                <Option key={option.title} {...option} />
            ))}
        </div>
    );
};

export default Top;
