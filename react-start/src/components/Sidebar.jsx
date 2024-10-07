import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersListContext } from "../context/userListContext";

const Sidebar = () => {
  const { usersList, toggleSideBar } = useContext(UsersListContext);
  return (
    <div>
      {toggleSideBar && (
        <ul>
          {usersList.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
