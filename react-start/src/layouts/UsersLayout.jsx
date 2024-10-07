import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { UsersListContext } from "../context/userListContext";

const UsersLayout = ({ UsersList, children }) => {
  const { setToggleSideBar } = useContext(UsersListContext);
  return (
    <>
      <main className="grid grid-cols-4">
        <Sidebar list={UsersList} className={"col-end-1"} />
        <div className="col-start-2 col-end-5">{children}</div>
      </main>
      <button
        className="border m-3 border-gray-800 rounded-md p-3"
        onClick={() => setToggleSideBar(true)}
      >
        show sidebar
      </button>
    </>
  );
};

export default UsersLayout;
