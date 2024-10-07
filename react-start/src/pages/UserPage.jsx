import { useParams } from "react-router-dom";
import useFetchData from "../utils/fetchData";
import { useFetchSingleUser } from "../services/userApi";

const UserPage = () => {
  const { id } = useParams();

  // const { data, loading } = useFetchData(
  //   `https://jsonplaceholder.typicode.com/users/${id}`
  // );
  const { data, isFetching: loading } = useFetchSingleUser(id);

  return (
    <>
      {loading ? (
        "loading ..."
      ) : (
        <div className="bg-gray-300 w-100 h-100">
          <h1>UserPage for {data.name} </h1>
          <h5>userId: {id} </h5>
          <div>{data.email}</div>
        </div>
      )}
    </>
  );
};

export default UserPage;
