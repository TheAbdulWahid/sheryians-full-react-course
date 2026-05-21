import React, { useContext } from "react";
import { ContextData } from "../../context/ThemeContent";

const Navbar2 = (props) => {
    const contextUse = useContext(ContextData)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>{props.theme}</li>
        </ul>
        {contextUse}
      </nav>
    </div>
  );
};

export default Navbar2;
