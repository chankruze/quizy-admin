/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 10:29:52 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import TabHeader from "../components/common/TabHeader";
import StudentTabContainer from "../components/student/StudentTabContainer";
import { studentTabs } from "../config/tabs";
import { Tab } from "../types/tab";

const Student = () => {
  const [activeTab, setActiveTab] = useState(studentTabs[0]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-2">
      <div>
        {/* tab headers */}
        {studentTabs && studentTabs.length > 0 && (
          <div className="flex gap-4 border-b border-gray-100 overflow-x-auto">
            {studentTabs.map((tab: Tab) => (
              <TabHeader
                key={tab.id}
                tab={{ ...tab, isActive: activeTab.id === tab.id }}
                onClick={handleTabClick}
              />
            ))}
          </div>
        )}
      </div>
      {/* active tab */}
      {activeTab && (
        <div className="flex-1 flex">
          <StudentTabContainer tab={activeTab} />
        </div>
      )}
    </div>
  );
};

export default Student;
