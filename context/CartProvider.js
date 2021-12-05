import React, { useReducer } from "react";
import CartContext from "./CartContext";
import reducer, { actions, initialState } from "../reducer/cartReducer";
import { getLocalStorage } from "../actions/auth";

function CartProvider({ children }) {
  const cartState = getLocalStorage("cart");
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cart: state.cart,
    itemCount: state.itemCount,
    totalPrice: state.totalPrice,
    addItem: (product, count) => {
      dispatch({ type: actions.ADD_ITEM, ...product, count });
    },
    updateItem: (id, count, i) => {
      dispatch({ type: actions.UPDATE_ITEM, id, count, i });
    },
    removeItem: (id, i) => {
      dispatch({ type: actions.REMOVE_ITEM, id, i });
    },
    removeAll: () => {
      dispatch({ type: actions.REMOVE_ITEM });
    },
    getLocalCart: () => {
      dispatch({ type: actions.INITIAL_LOCAL_CART });
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
