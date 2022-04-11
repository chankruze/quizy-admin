/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 09:39:27 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "../../../helpers/api/api-handler";
import { omit } from "../../../helpers/api/omit";
import { usersRepo } from "../../../helpers/users-repo";

export default apiHandler({
    get: getUsers,
});

function getUsers(req: NextApiRequest, res: NextApiResponse) {
    // return users without passwords in the response
    const response = usersRepo.getAll().map((x: any) => omit(x, "password"));
    return res.status(200).json(response);
}
