import React, { useMemo, useState } from "react";
import { TreeItemType } from "./type";
import TreeList from "./TreeList";

type Props = {
  item: TreeItemType;
};

const TreeItem = ({ item }: Props) => {
  const [open, setOpen] = useState<any>({});

  const handleToggle = (label: string) => {
    setOpen({
      ...open,
      [label]: !open[label],
    });
  };

  const getSign = useMemo(() => {
    return open[item.label] ? "-" : "+";
  }, [item.label, open]);

  return (
    <li>
      <div className="tree-item">
        {item.children?.length ? (
          <span onClick={() => handleToggle(item.label)}>{getSign}</span>
        ) : null}
        {item.label}
      </div>
      {item.children?.length && open[item.label] ? (
        <TreeList list={item.children} />
      ) : null}
    </li>
  );
};

export default TreeItem;
