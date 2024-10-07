import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UsersLayout from "../layouts/UsersLayout";
import { UsersListContext } from "../context/userListContext";
import { useFetchUsers } from "../services/userApi";

const UsersList = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const { data: users, isFetching } = useFetchUsers();

  return (
    <>
      {isFetching ? (
        "loading..."
      ) : (
        <UsersListContext.Provider
          value={{ usersList: users, toggleSideBar, setToggleSideBar }}
        >
          <button
            className="border border-gray-800 rounded-md p-3 m-3"
            onClick={() => setToggleSideBar(!toggleSideBar)}
          >
            toggle sidebar
          </button>
          <UsersLayout UsersList={users}>
            <Outlet />
          </UsersLayout>
        </UsersListContext.Provider>
      )}
    </>
  );
};

export default UsersList;
