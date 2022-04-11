/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 06 2022 10:45:13 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useEffect, useState } from "react";
import { userService } from "../../../services";
import Bottom from "./Bottom";
import Top from "./Top";

const SideBar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(userService.userValue);
    }, []);

    return (
        <div className="pl-2 pt-2 pb-2 w-64 flex flex-col">
            <Top />
            {user && <Bottom user={user} />}
        </div>
    );
};

export default SideBar;
