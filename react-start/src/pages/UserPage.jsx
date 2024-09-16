import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const data = useParams();
  console.log(" data : ", data);
  return <div>UserPage for {data.name}</div>;
};

export default UserPage;
