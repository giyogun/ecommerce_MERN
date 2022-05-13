import React, { useContext } from "react";
import CartModal from "./CartModal";
import AppContext from "../context/appContext";
import CartItem from "./CartItem";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import getStripe from "../lib/getStripe";
import toast from "react-hot-toast";
import axios from "axios";

const Cart = () => {
  const ctx = useContext(AppContext);

  const { items } = ctx;

  const totAmt = `$${ctx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className="cart-items">
      {items.map((item) => (
        <CartItem key={item._id} product={item} />
      ))}
    </ul>
  );

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const res = await axios.post("https://giyogun-ecom.herokuapp.com/api/stripe", {
      body: items,
    });

    if (res.statusCode === 500) return;

    const data = await res.data;

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartModal>
      <h2 className="cart-heading">Shopping Cart</h2>
      {cartItems}
      {items.length <= 0 && (
        <div className="empty-cart">
          <TiShoppingCart style={{ color: "#07245c" }} size={150} />
          <h3>Nothing in your cart 😟</h3>
          <Link href="/">
            <button
              className="btn"
              type="button"
              onClick={() => ctx.setShowCart()}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
      <div className="total-cart">
        <span>{items.length > 0 && "Total Amount"}</span>
        {items.length > 0 && <span>{totAmt}</span>}
      </div>
      <div className="actions">
        <button className="button--alt" onClick={() => ctx.setShowCart()}>
          Close
        </button>
        {items.length > 0 && (
          <button className="button-cart" onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
    </CartModal>
  );
};

export default Cart;
