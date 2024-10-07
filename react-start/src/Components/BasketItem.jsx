import React from "react";
import useBasket from "../store/useBasket";

const BasketItem = ({ data }) => {
  const { imageSrc, name, price, quantity } = data;
  const { removeFromBasket } = useBasket((state) => state);

  return (
    <div className="bg-zinc-200 p-2 m-2 rounded-md">
      <img src={imageSrc} alt={name} />
      <h2 className="text-xl text-slate-900 font-bold	">{name}</h2>
      <div className="flex justify-between mb-3">
        <p className="text-emerald-800 font-bold	">price </p>
        <p className="font-bold	">${price}</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="text-emerald-800 font-bold	">QTY </p>
        <p className="font-bold	">{quantity}</p>
      </div>
      <button
        className="bg-rose-600 p-2 rounded text-white "
        onClick={() => removeFromBasket(data)}
      >
        remove
      </button>
    </div>
  );
};

export default BasketItem;
