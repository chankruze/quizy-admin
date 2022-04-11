/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 09:45:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { NextApiResponse } from "next";

export const errorHandler = (err: any, res: NextApiResponse) => {
    if (typeof err === "string") {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.status) {
        // status code set in error object
        return res.status(err.status).json({ message: err.message });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
};
