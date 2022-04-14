/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 10:33:01 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Divider from "../../components/common/Divider";
import SearchBar from "../../components/common/SearchBar";
import NewQuizButton from "../../components/quiz/NewQuizButton";

const index = () => {
    return (
        <div className="p-2">
            <div className="flex justify-between items-center gap-2">
                <NewQuizButton />
                <SearchBar placeholder="Search in Quizzes" />
            </div>
            <Divider />
            <div></div>
        </div>
    );
};

export default index;
