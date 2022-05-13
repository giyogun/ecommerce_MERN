import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import AppContext from "../context/appContext";

const Navbar = () => {
  const ctx = useContext(AppContext);
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Electro Store</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => {
          ctx.setShowCart();
        }}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">
          {ctx.items?.length > 0 ? ctx.items?.length : 0}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
