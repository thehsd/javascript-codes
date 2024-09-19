import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function ({ placeholder }, ref) {
  const internalRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        getValue() {
          return internalRef.current.value;
        },
        focus() {
          internalRef.current.focus();
        },
      };
    },
    []
  );
  return (
    <>
      <input
        ref={internalRef}
        type="text"
        placeholder={placeholder}
        // onChange={(e) => setter(e.target.value)}
      />
    </>
  );
});

export default Input;
