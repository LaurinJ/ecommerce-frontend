import { setLocalStorage, getLocalStorage } from "../actions/auth";

export const initialState = {
  cart: [],
  itemCount: 0,
  totalPrice: 0,
  delivery: { id: "", name: "", price: 0 },
  payment: { id: "", name: "" },
};

export const actions = {
  ADD_ITEM: "ADD_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  REMOVE_ALL: "REMOVE_ALL",
  INITIAL_LOCAL_CART: "INITIAL_LOCAL_CART",
  ADD_DELIVERY: "ADD_DELIVERY",
  ADD_PAYMENT: "ADD_PAYMENT",
};

//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM: {
      let newItem = true;
      const filteredCartItem = state.cart.map((item) => {
        if (item.title !== action.title) {
          return item;
        } else {
          newItem = false;
          item.count += action.count;
          return item;
        }
      });
      if (newItem) {
        filteredCartItem.push({
          _id: action._id,
          title: action.title,
          price: action.price,
          old_price: action.old_price,
          short_description: action.short_description,
          count: action.count,
          img: action.imgurl,
        });
      }
      const cart = {
        cart: [...filteredCartItem],
        itemCount: state.itemCount + Number(action.count),
        totalPrice: state.totalPrice + action.count * action.price,
        delivery: state.delivery,
        payment: state.payment,
      };
      setLocalStorage("cart", cart);
      return cart;
    }
    case actions.UPDATE_ITEM: {
      const pre_count = state.cart[action.i].count;
      const item_price = state.cart[action.i].price;
      let count;
      let total;
      if (action.count > pre_count) {
        count = state.itemCount + (action.count - pre_count);
        total = state.totalPrice + (action.count - pre_count) * item_price;
      } else {
        count = state.itemCount - (pre_count - action.count);
        total = state.totalPrice - (pre_count - action.count) * item_price;
      }
      const filteredCartItem = state.cart.map((item) => {
        if (item._id !== action._id) {
          return item;
        } else {
          item.count = action.count;
          return item;
        }
      });
      const cart = {
        cart: filteredCartItem,
        itemCount: count,
        totalPrice: total,
        delivery: state.delivery,
        payment: state.payment,
      };
      setLocalStorage("cart", cart);
      return cart;
    }

    case actions.REMOVE_ITEM: {
      const count = state.itemCount - state.cart[action.i].count;
      const total =
        state.totalPrice -
        state.cart[action.i].count * state.cart[action.i].price;
      const filteredCartItem = state.cart.filter(
        (item) => item._id !== action._id
      );
      const cart = {
        cart: filteredCartItem,
        itemCount: count,
        totalPrice: total,
        delivery: state.delivery,
        payment: state.payment,
      };
      setLocalStorage("cart", cart);
      return cart;
    }
    case actions.REMOVE_ALL: {
      const cart = {
        cart: [],
        itemCount: 0,
        totalPrice: 0,
        delivery: { id: "", name: "", price: 0 },
        payment: { id: "", name: "" },
      };
      setLocalStorage("cart", cart);
      return cart;
    }
    case actions.INITIAL_LOCAL_CART: {
      const cart = getLocalStorage("cart");
      if (!cart || cart.length == 0) {
        return {
          cart: [],
          itemCount: 0,
          totalPrice: 0,
          delivery: { id: "", name: "", price: 0 },
          payment: { id: "", name: "" },
        };
      } else {
        return { ...cart };
      }
    }
    case actions.ADD_DELIVERY: {
      const cart = {
        ...state,
        delivery: { id: action.id, name: action.name, price: action.price },
      };
      setLocalStorage("cart", cart);
      return cart;
    }
    case actions.ADD_PAYMENT: {
      const cart = {
        ...state,
        payment: { id: action.id, name: action.name },
      };
      setLocalStorage("cart", cart);
      return cart;
    }
    default:
      return state;
  }
};

export default reducer;
