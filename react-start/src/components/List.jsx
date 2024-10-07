import React, { useContext } from "react";
import FormContext from "../context/formContext";

const ListUI = () => {
  const { list, setList } = useContext(FormContext);
  const deleteItem = (id) => {
    const newList = [];
    list.forEach((element) => {
      if (element.id !== id) {
        newList.push(element);
      }
    });
    setList(newList);
  };
  return (
    <section>
      <button onClick={() => setList([])}>clear all</button>
      {list.map((item, index) => (
        <div className="p-2 m-3 bg-gray-400" key={index}>
          <p>{item.firstName}</p>
          <p>{item.lastName}</p>
          <p>{item.email}</p>
          <button className="bg-red-500" onClick={() => deleteItem(item.id)}>
            delete
          </button>
        </div>
      ))}
    </section>
  );
};

export default ListUI;
