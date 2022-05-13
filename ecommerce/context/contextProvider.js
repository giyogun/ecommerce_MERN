import React, { useReducer, useState } from "react";
import AppContext from "./appContext";

const reducerFn = (state, action) => {
  if (action.type === "ADD") {
    return {
      items: state.items,
      totalAmount: state.totalAmount,
    };
  }
  
  if (action.type === "INCLUDE") {
    let newItems = [];
    const totAmt =
      state.totalAmount + action.payload.price * action.payload.qty;

    const existingItemIndex = state.items.findIndex(
      (item) => item._id === action.payload._id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        qty: existingItem.qty + action.payload.qty,
      };
      newItems = [...state.items];
      newItems[existingItemIndex] = updatedItem;
    } else {
      newItems = state.items.concat(action.payload);
    }

    return {
      items: newItems,
      totalAmount: totAmt,
    };
  }

  if (action.type === "REMOVE") {
    const existingItem = state.items.find(
      (item) => item._id === action.payload
    );
    const index = state.items.findIndex((item) => item._id === action.payload);
    const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };

    let newList = [];
    let newAmount;

    if (updatedItem.qty <= 0) {
      updatedItem.qty = 0;
      newList = state.items.filter((item) => item !== existingItem);
    } else {
      newList = [...state.items];
      newList[index] = updatedItem;
    }
    newAmount =
      state.totalAmount <= 0 ? 0 : state.totalAmount - existingItem.price;

    return {
      items: newList,
      totalAmount: newAmount,
    };
  }

  if (action.type === "RESET") {
    return {
      items: [],
      totalAmount: 0,
    };
  }

  return state;
};

const initialState = { items: [], totalAmount: 0 };

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const [cartIsShown, setCartIsShown] = useState(false);

  const addToCartHandler = (product) => {
    dispatch({ type: "INCLUDE", payload: product });
  };
  const removeFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const cartShowHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  const resetState = () => {
    dispatch({ type: "RESET" });
  };

  const value = {
    items: state.items,
    totalAmount: state.totalAmount,
    showCart: cartIsShown,
    defaultState: resetState,
    setShowCart: cartShowHandler,
    addProduct: addToCartHandler,
    removeProduct: removeFromCartHandler,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
