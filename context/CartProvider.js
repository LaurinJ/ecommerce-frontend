import React, { useReducer } from "react";
import CartContext from "./CartContext";
import reducer, { actions, initialState } from "../reducer/cartReducer";

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cart: state.cart,
    itemCount: state.itemCount,
    totalPrice: state.totalPrice,
    addItem: (product, count) => {
      dispatch({ type: actions.ADD_ITEM, ...product, count });
    },
    removeItem: (id, i) => {
      dispatch({ type: actions.REMOVE_ITEM, id, i });
    },
    removeAll: () => {
      dispatch({ type: actions.REMOVE_ITEM });
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
