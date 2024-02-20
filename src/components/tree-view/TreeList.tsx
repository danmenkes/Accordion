import React from "react";
import { TreeItemType } from "./type";
import TreeItem from "./TreeItem";

type Props = {
  list: TreeItemType[];
};

const TreeList = ({ list = [] }: Props) => {
  return (
    <ul className="menu-list-container">
      {list?.length
        ? list.map((item, index) => {
            return <TreeItem key={index} item={item} />;
          })
        : null}
    </ul>
  );
};

export default TreeList;
