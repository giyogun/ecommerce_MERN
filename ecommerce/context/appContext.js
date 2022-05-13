import React from "react";

const AppContext = React.createContext({
  items: [],
  totalAmount: 0,
  showCart: false,
  defaultState: () => {},
  setShowCart: () => {},
  addQty: () => {},
  reduceQty: () => {},
  addProduct: () => {},
  removeProduct: () => {},
});

export default AppContext;
