export const initialState = {
  cart: [],
  itemCount: 0,
  totalPrice: 0,
};

export const actions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  REMOVE_ALL: "REMOVE_ALL",
};

// will be needed refactoring
//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        cart: [
          ...state.cart,
          {
            id: new Date().valueOf(),
            title: action.title,
            price: action.price,
            old_price: action.old_price,
            count: action.count,
            img: action.imgurl,
          },
        ],
        itemCount: state.itemCount + Number(action.count),
        totalPrice: state.totalPrice + action.count * action.price,
        // totalPrice: state.cart
        //   .reduce((acc, product) => acc + Number(product.price), 0)
        //   .toFixed(2),
      };
    case actions.REMOVE_ITEM: {
      const count = state.itemCount - state.cart[action.i].count;
      const total =
        state.totalPrice -
        state.cart[action.i].count * state.cart[action.i].price;
      const filteredCartItem = state.cart.filter(
        (item) => item.id !== action.id
      );
      return {
        cart: filteredCartItem,
        itemCount: count,
        totalPrice: total,
      };
    }
    case actions.REMOVE_ALL: {
      return { cart: [] };
    }
    default:
      return state;
  }
};

export default reducer;
