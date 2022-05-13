import React, { useContext } from "react";
import AppContext from "../context/appContext";

const Backdrop = () => {
  const ctx = useContext(AppContext);

  return <div className="backdrop" onClick={() => ctx.setShowCart()}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="modal">
      <div>{children}</div>
    </div>
  );
};

const CartModal = ({ children }) => {
  return (
    <React.Fragment>
      <Backdrop />
      <ModalOverlay>{children}</ModalOverlay>
    </React.Fragment>
  );
};

export default CartModal;
