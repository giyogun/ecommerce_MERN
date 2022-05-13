import { useContext } from "react";
import AppContext from "../context/appContext";

const CartItem = ({ product }) => {
  const ctx = useContext(AppContext);
  const { name, price, qty, _id, image } = product;

  return (
    <li className="cart-item">
      <div className="cart-item-details">
        <img src={image[0]} />
        <div className="summary">
          <h4>{name}</h4>
          <span className="price-cart-item">{price}</span>
          <span className="amount">x {qty}</span>
        </div>
      </div>
      <div className="actions-cart-item">
        <button onClick={() => ctx.removeProduct(_id)}>−</button>
        <button onClick={() => ctx.addProduct({ ...product, qty: 1 })}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
