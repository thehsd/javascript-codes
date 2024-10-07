import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormContext from "../context/formContext";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const { setList, list } = useContext(FormContext);

  const handleSub = (data) => {
    setList([...list, { ...data, id: uuidv4() }]);
  };
  return (
    <form onSubmit={handleSubmit(handleSub)}>
      <div>
        <label htmlFor="fname">first name</label>
        <input
          {...register("firstName")}
          className="border border-gray-900 rounded-lg"
          type="text"
          id="fname"
        />
      </div>
      <div>
        <label htmlFor="lname">last name</label>
        <input
          {...register("lastName")}
          className="border border-gray-900 rounded-lg"
          type="text"
          id="lname"
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          {...register("email")}
          className="border border-gray-900 rounded-lg"
          type="text"
          id="email"
        />
      </div>
      <button type="submit">submit data</button>
    </form>
  );
};

export default Form;
