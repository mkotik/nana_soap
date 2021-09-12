import { TOGGLE_CART_OPEN } from "../actions";

const initialState = {
  cartOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_OPEN: {
      return {
        ...state,
        cartOpen: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
