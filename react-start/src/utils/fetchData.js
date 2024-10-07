import { useEffect, useState } from "react";

const useFetchData = (url) => {
  //   let data = null;
  //   let loading = false;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const dataFetcher = async () => {
      setLoading(true);
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
      setLoading(false);
    };
    dataFetcher();
  }, [url]);
  return { data, loading };
};

export default useFetchData;
