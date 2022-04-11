/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 09:39:53 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "../../../helpers/api/api-handler";
import { omit } from "../../../helpers/api/omit";
import { usersRepo } from "../../../helpers/users-repo";

export default apiHandler({
    post: authenticate,
});

function authenticate(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;
    const user = usersRepo.find(
        (x: any) => x.email === email && x.password === password,
    );

    if (!user) throw "Username or password is incorrect";

    // return basic user details on success
    return res.status(200).json(omit(user, "password"));
}
