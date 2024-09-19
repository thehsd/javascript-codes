import React, { useRef, useState } from "react";
import Input from "./Input";

const Form = () => {
  const firstNameRef = useRef("");
  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    console.log(firstNameRef.current.getValue());
  };
  return (
    <>
      <Input ref={firstNameRef} placeholder={"enter something"} />
      <button className=" mx-4" onClick={handleSubmit}>
        submit
      </button>
      {show && (
        <div>
          <p className="text-gray-950 bg-slate-200 p-4"></p>
        </div>
      )}
    </>
  );
};

export default Form;
