import { useQuery } from "@tanstack/react-query";
const endpointsUrl = {
  users: "https://jsonplaceholder.typicode.com/users",
  singleUser: (id) => `https://jsonplaceholder.typicode.com/usersd/${id}`,
};
export const useFetchUsers = () => {
  const fetcher = async () => {
    const res = await fetch(endpointsUrl.users);
    const result = await res.json();
    return result;
  };
  const { data, isFetching } = useQuery({
    queryKey: [endpointsUrl.users],
    queryFn: () => fetcher(),
    staleTime: 10000,
  });

  return { data, isFetching };
};
export const useFetchSingleUser = (id) => {
  const fetcher = async () => {
    const res = await fetch(endpointsUrl.singleUser(id));
    const result = await res.json();
    return result;
  };
  const { data, isFetching } = useQuery({
    queryKey: [endpointsUrl.singleUser(id)],
    queryFn: () => fetcher(),
    staleTime: 10000,
    gcTime: 10000,
  });
  return { data, isFetching };
};
