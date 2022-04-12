/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 09:52:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { errorHandler } from "./error-handler";
import { basicAuthMiddleware } from "./basic-auth-middleware";
import { NextApiRequest, NextApiResponse } from "next";

export const apiHandler = (handler: any) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const method: string = req.method?.toLowerCase() as string;

        // check handler supports HTTP method
        if (!handler[method])
            return res.status(405).end(`Method ${req.method} Not Allowed`);

        try {
            // global middleware
            await basicAuthMiddleware(req, res);

            // route handler
            await handler[method](req, res);
        } catch (err) {
            // global error handler
            errorHandler(err, res);
        }
    };
};
