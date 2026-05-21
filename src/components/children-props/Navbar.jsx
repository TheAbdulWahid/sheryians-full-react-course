import React from "react";
import Navbar2 from "./Navbar2";
const Navbar = (props) => {
  return (
    <div>
      <div className="logo">Sheryians Coding Scholl</div>
      <Navbar2 theme={props.theme}>
        <h2>This is First Children</h2>
        <h3>This is Second Children</h3>
      </Navbar2>
    </div>
  );
};

export default Navbar;
