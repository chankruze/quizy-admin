/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Apr 27 2022 07:10:15 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { TAB_TYPE } from "../../config/tabs";
import { Tab } from "../../types/tab";
import PendingTab from "./tabs/PendingTab";
import VerifiedTab from "./tabs/VerifiedTab";
import RejectedTab from "./tabs/RejectedTab";

interface TabProps {
  tab: Tab;
}

const StudentTabContainer: React.FC<TabProps> = ({ tab }) => {
  switch (tab.id) {
    case TAB_TYPE.TAB_STUDENT_VERIFIED:
      return <VerifiedTab />;

    case TAB_TYPE.TAB_STUDENT_PENDING:
      return <PendingTab />;

    case TAB_TYPE.TAB_STUDENT_REJECTED:
      return <RejectedTab />;

    default:
      return <VerifiedTab />;
  }
};

export default StudentTabContainer;
