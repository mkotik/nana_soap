export const TOGGLE_CART_OPEN = "TOGGLE_CART_OPEN";

export const toggleCartOpen = (value) => {
  return { type: TOGGLE_CART_OPEN, payload: value };
};
