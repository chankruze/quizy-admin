// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            await getAllStudentsOfSemester(req, res);
            break;
        default:
            res.status(405).json({
                status: false,
                message: "Method Not found",
            });
            break;
    }
};

const getAllStudentsOfSemester = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {
    if (req.body.semester) {
        const data = await axios.get("http://localhost:6767/api/students", {
            data: {
                semester: req.body.semester,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Success",
            data: data.data,
        });
    }

    return res.status(400).json({
        status: false,
        message: "Bad Request",
    });
};
