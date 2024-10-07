import React from "react";
import { NavLink } from "react-router-dom";
import useBasket from "../store/useBasket";

const Header = () => {
  const { items } = useBasket((state) => state);
  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div className="justify-between flex p-5 bg-sky-100">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "text-gray-700" : isActive ? "text-blue-500" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/basket"
        className={({ isActive, isPending }) =>
          isPending ? "text-gray-700" : isActive ? "text-blue-500" : ""
        }
      >
        Basket {totalItems}
      </NavLink>
    </div>
  );
};

export default Header;
