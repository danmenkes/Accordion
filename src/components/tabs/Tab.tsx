import Tabs from "./Tabs";

const RandomComponent = () => {
  return <div>Random component</div>;
};

const Tab = () => {
  const tabs = [
    {
      label: "Tab1",
      content: <div>This is content for tab 1</div>,
    },
    {
      label: "Tab2",
      content: <div>This is content for tab 2</div>,
    },
    {
      label: "Tab3",
      content: <RandomComponent />,
    },
  ];

  return (
    <Tabs
      tabsContent={tabs}
      onChange={(currentIndex) => {
        console.log("currentIndex=", currentIndex);
      }}
    />
  );
};

export default Tab;
