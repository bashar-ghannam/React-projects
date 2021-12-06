const reducer = (state, action) => {
  if (action.type === 'CLRAE_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  // if (action.type === 'INCREASE') {
  //  let tepmCart = state.cart.map((cartItem) => {
  //   if (cartItem.id === action.payload) {
  //    return { ...cartItem, amount: cartItem.amount + 1 }
  //   }
  //   return cartItem
  //  })
  //  return {
  //   ...state,
  //   cart: tepmCart,
  //  };
  // }
  // if (action.type === 'DECREASE') {
  //  let tepmCart = state.cart
  //   .map((cartItem) => {
  //    if (cartItem.id === action.payload) {
  //     return { ...cartItem, amount: cartItem.amount - 1 };
  //    }
  //    return cartItem;
  //   })
  //   .filter((cartItem) => cartItem.amount !== 0)
  //  return {
  //   ...state,
  //   cart: tepmCart,
  //  };
  // }
  if (action.type === 'TOGGLE_AMOUNT') {
    let tepmCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tepmCart };
  }

  if (action.type === 'GET_TOTAL') {
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.amount += cartItem.amount;
        const totalPrice = cartItem.amount * cartItem.price;
        cartTotal.total += totalPrice;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAYITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }

  throw new Error('no matching action type');
};
export default reducer;
