/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 09:45:47 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { usersRepo } from "../users-repo";

export const basicAuthMiddleware = async (req: any, res: any) => {
    // make authenticate path public
    if (req.url === "/api/users/authenticate") {
        return;
    }

    // check for basic auth header
    if (
        !req.headers.authorization ||
        req.headers.authorization.indexOf("Basic ") === -1
    ) {
        throw { status: 401, message: "Missing Authorization Header" };
    }

    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString(
        "ascii",
    );
    const [email, password] = credentials.split(":");
    const user = await usersRepo.find(
        (x: any) => x.email === email && x.password === password,
    );
    if (!user) {
        throw { status: 401, message: "Invalid Authentication Credentials" };
    }

    // attach user to request object
    req.user = user;
};
