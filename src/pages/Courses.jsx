import React from "react";
import { Outlet, useLocation } from "react-router-dom";
const Courses = () => {
    const location = useLocation();
  return (
    <div>
      {location.pathname === "/courses" && <h1>Courses Page</h1>}

      <Outlet />
    </div>
  );
};

export default Courses;
