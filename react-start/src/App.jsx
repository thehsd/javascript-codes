import React, { useEffect, useState } from "react";
import Button from "./components/common/button";
function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiFetch = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const data = await apiFetch.json();
      setPostList(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Button variant={"primary"}>click</Button>
      {postList.map((post) => {
        return <li>{post.title}</li>;
      })}
    </div>
  );
}

export default App;
