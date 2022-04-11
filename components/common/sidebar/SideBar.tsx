/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 06 2022 10:45:13 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Bottom from "./Bottom";
import Top from "./Top";

const SideBar = () => {
    return (
        <div className="pl-2 pt-2 pb-2 w-64 flex flex-col">
            <Top />
            <Bottom />
        </div>
    );
};

export default SideBar;
