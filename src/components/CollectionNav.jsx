import React from "react";
import {Link} from "react-router-dom"
const CollectionNav = () => {
  return (
    <div className="absolute top-0 left-0 bg-green-700 w-full flex justify-center gap-6 text-[20px] py-[10px]">
      <Link to="/product/men">Men</Link>
      <Link to="/product/women">Women</Link>
      <Link to="/product/kids">Kids</Link>
    </div>
  );
};

export default CollectionNav;
