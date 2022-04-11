/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 06 2022 10:40:12 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { NextPage } from "next";
import ProgressRing from "../../components/ProgressRing";

const DashBoard: NextPage = () => {
    return (
        <div className="flex">
            <div className="flex-1 p-8 relative flex justify-center items-center">
                <div className="absolute">
                    <p className="text-center text-7xl font-bold text-yellow-400">
                        80
                    </p>
                    <p className="text-center capitalize text-lg">
                        Total Quizzes
                    </p>
                </div>
                <ProgressRing percentage={80} color="#fbbf24" />
            </div>
            <div className="flex-1 p-8 relative flex justify-center items-center">
                <div className="absolute">
                    <p className="text-center text-7xl font-bold text-green-400">
                        1121
                    </p>
                    <p className="text-center capitalize text-lg">
                        Submissions recorded
                    </p>
                </div>
                <ProgressRing percentage={1121} color="#34d399" />
            </div>
            <div className="flex-1 p-8 relative flex justify-center items-center">
                <div className="absolute">
                    <p className="text-center text-7xl font-bold text-pink-400">
                        689
                    </p>
                    <p className="text-center capitalize text-lg">
                        Registered Students
                    </p>
                </div>
                <ProgressRing percentage={689} color="#f472b6" />
            </div>
        </div>
    );
};

export default DashBoard;
