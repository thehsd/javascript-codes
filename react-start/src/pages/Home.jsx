import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="p-5">
      {/* <Link to="/users" className="m-4 p-3 border border-gray-950 rounded-lg">
        user list
      </Link> */}
      <Form />
    </div>
  );
};

export default Home;
