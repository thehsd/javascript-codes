import React from "react";

const SearchBox = ({ method }) => {
  return (
    <>
      <input
        className="m-4 p-4 rounded-md"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          method(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBox;
