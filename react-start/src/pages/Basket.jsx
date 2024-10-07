import React from "react";
import useBasket from "../store/useBasket";
import BasketItem from "../Components/BasketItem";

const Basket = () => {
  const { items, invoice } = useBasket((state) => state);
  return (
    <div>
      <p>total price: {invoice.totalPrice}</p>
      {items.map((item) => (
        <BasketItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Basket;
