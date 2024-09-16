import React, { useEffect, useRef } from "react";

const Input = ({ placeholder = "", type = "text", handleChange }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    return () => {};
  }, []);

  return (
    <input
      ref={inputRef}
      className="p-3 border border-gray-600 rounded-md bg-white"
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Input;
