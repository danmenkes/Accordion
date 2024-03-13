import "./tabs.css";
import { ReactNode, useState } from "react";

type tabItem = {
  label: string;
  content: ReactNode;
};

type Props = {
  tabsContent: tabItem[];
  onChange: (index: number) => void;
};
const Tabs = ({ tabsContent, onChange }: Props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => {
          return (
            <div
              className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
              key={tabItem.label}
              onClick={() => {
                setCurrentTabIndex(index);
                onChange(index);
              }}
            >
              <span className="label">{tabItem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="tabContent">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
