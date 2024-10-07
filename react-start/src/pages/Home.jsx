import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormContext from "../context/formContext";
import Form from "../components/Form";
import ListUI from "../components/List";

const Home = () => {
  const [list, setList] = useState([]);
  const contextValue = { list, setList };
  return (
    <div className="p-5">
      <FormContext.Provider value={contextValue}>
        <Form />
        <ListUI />
      </FormContext.Provider>
    </div>
  );
};

export default Home;
