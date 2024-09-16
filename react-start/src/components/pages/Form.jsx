import React, { useState } from "react";
import Input from "../common/input";

function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleFrom = (e) => {
    e.preventDefault();
    setShowResult(!showResult);
  };

  return (
    <div>
      <form className="flex flex-col gap-4 w-2/3">
        {/* <Input
          placeholder="enter username"
          type="text"
          handleChange={setUserName}
        /> */}
        <Input
          placeholder="enter password"
          type="password"
          handleChange={setPassword}
        />
        <button
          className="bg-green-600 rounded-md p-3 text-white"
          onClick={handleFrom}
        >
          show result
        </button>
      </form>
      <div>
        {showResult === true && (
          <ul>
            <li>username : {userName}</li>
            <li>password: {password}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Form;
