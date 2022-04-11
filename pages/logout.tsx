/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 12:16:23 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import { userService } from "../services";

const logout = () => {
    userService.logout();

    return <div>logging you out...</div>;
};

export default logout;
