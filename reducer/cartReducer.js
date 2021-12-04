import { setLocalStorage, getLocalStorage } from "../actions/auth";

export const initialState = {
  cart: [],
  itemCount: 0,
  totalPrice: 0,
};

export const actions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  REMOVE_ALL: "REMOVE_ALL",
  INITIAL_LOCAL_CART: "INITIAL_LOCAL_CART",
};

//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      const cart = {
        cart: [
          ...state.cart,
          {
            id: new Date().valueOf(),
            title: action.title,
            price: action.price,
            old_price: action.old_price,
            description: action.description,
            count: action.count,
            img: action.imgurl,
          },
        ],
        itemCount: state.itemCount + Number(action.count),
        totalPrice: state.totalPrice + action.count * action.price,
      };
      setLocalStorage("cart", cart);
      return cart;

    case actions.REMOVE_ITEM: {
      const count = state.itemCount - state.cart[action.i].count;
      const total =
        state.totalPrice -
        state.cart[action.i].count * state.cart[action.i].price;
      const filteredCartItem = state.cart.filter(
        (item) => item.id !== action.id
      );
      const cart = {
        cart: filteredCartItem,
        itemCount: count,
        totalPrice: total,
      };
      setLocalStorage("cart", cart);
      return cart;
    }
    case actions.REMOVE_ALL: {
      return { cart: [], itemCount: 0, totalPrice: 0 };
    }
    case actions.INITIAL_LOCAL_CART: {
      const cart = getLocalStorage("cart");
      if (!cart || cart.length == 0) {
        return { cart: [], itemCount: 0, totalPrice: 0 };
      } else {
        return { ...cart };
      }
    }
    default:
      return state;
  }
};

export default reducer;
