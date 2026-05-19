import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-[40px]">
        <li>
          <Link to="/" className="text-[18px]">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-[18px]">About</Link>
        </li>
        <li>
          <Link to="/courses" className="text-[18px]">Courses</Link>
        </li>
        <li>
          <Link to="/contact" className="text-[18px]">Contact</Link>
        </li>
        <li>
          <Link to="/product" className="text-[18px]">Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
