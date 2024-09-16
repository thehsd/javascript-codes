import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();

    return () => {
      console.log("un mounted");
    };
  }, []);

  return (
    <>
      <Link to="/" className="m-4 p-3 border border-gray-950 rounded-lg">
        home
      </Link>
      <br />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/users/${user.name}`}>{user.name}</Link>
            <br />
          </div>
        );
      })}
      <br />
      <Outlet />
    </>
  );
};

export default UsersList;
