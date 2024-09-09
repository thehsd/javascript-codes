import React from "react";

const cardItem = ({ data }) => {
  return (
    <div className="hover:scale-110 transition-all bg-slate-300/80 flex justify-center flex-col items-center	">
      <img
        src={`https://www.robohash.org/${data.id}`}
        alt={data.name}
        width={128}
        height={128}
      />
      <h3>{data.name}</h3>
      <h5>{data.email}</h5>
    </div>
  );
};

export default cardItem;
