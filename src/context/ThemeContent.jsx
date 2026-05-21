import React, { useState } from "react";
import { createContext } from "react";
export const ContextData = createContext();

const ThemeContent = (props) => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ContextData.Provider value={[theme, setTheme]}>
        {props.children}
      </ContextData.Provider>
    </div>
  );
};

export default ThemeContent;
