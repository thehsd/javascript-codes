import React from "react";
import { Link } from "react-router-dom";

const RouteTwo = () => {
  return (
    <div>
      <Link to={"/route-1/sub-route-1"}>go to sub route one</Link>
    </div>
  );
};

export default RouteTwo;
