import React from "react";
import { Link, Outlet } from "react-router-dom";

const RouteOne = () => {
  return (
    <>
      <div>header </div>
      <Outlet />
      <div className="bg-red-300 p-4  ">
        {/* <a href="/route-2"> go to route two</a> */}
        <Link to={"/route-2"}>go to route two</Link>
      </div>
    </>
  );
};

export default RouteOne;
