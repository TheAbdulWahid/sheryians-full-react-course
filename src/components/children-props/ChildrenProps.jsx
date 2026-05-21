import React from "react";
import Navbar from "./Navbar";

const ChildrenProps = (props) => {
  return (
    <div>
      <div>ChildrenProps</div>
      <Navbar theme={props.theme}/>
    </div>
  );
};

export default ChildrenProps;
