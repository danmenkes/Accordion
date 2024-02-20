import "./data";
import "./TreeView.css";
import TreeList from "./TreeList";
import menus from "./data";

const TreeView = () => {
  return (
    <div className="tree-view-container">
      <TreeList list={menus} />
    </div>
  );
};

export default TreeView;
