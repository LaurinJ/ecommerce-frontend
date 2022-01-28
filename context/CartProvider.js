import React, { useReducer } from "react";
import CartContext from "./CartContext";
import reducer, { actions, initialState } from "../reducer/cartReducer";

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cart: state.cart,
    itemCount: state.itemCount,
    totalPrice: state.totalPrice,
    delivery: state.delivery,
    payment: state.payment,
    addItem: (product, count) => {
      dispatch({ type: actions.ADD_ITEM, ...product, count });
    },
    updateItem: (_id, count, i) => {
      dispatch({ type: actions.UPDATE_ITEM, _id, count, i });
    },
    removeItem: (_id, i) => {
      dispatch({ type: actions.REMOVE_ITEM, _id, i });
    },
    removeAll: () => {
      dispatch({ type: actions.REMOVE_ALL });
    },
    getLocalCart: () => {
      dispatch({ type: actions.INITIAL_LOCAL_CART });
    },
    addDelivery: (id, name, price) => {
      dispatch({ type: actions.ADD_DELIVERY, id, name, price });
    },
    addPayment: (id, name) => {
      dispatch({ type: actions.ADD_PAYMENT, id, name });
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
