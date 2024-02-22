import React, { useState } from "react";
import { useStorage } from "./useStorage";
import "./theme.css";

const Theme = () => {
  const { setValue, getValue } = useStorage();
  const [theme, setTheme] = useState(getValue("theme") || "light");

  const handleClick = () => {
    const newVal = theme === "light" ? "dark" : "light";
    setValue("theme", newVal);
    setTheme(newVal);
  };

  return (
    <div className={theme}>
      <button onClick={() => handleClick()}>Toggle theme</button>
    </div>
  );
};

export default Theme;
