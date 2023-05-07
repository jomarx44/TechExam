import {shopActionTypes} from './actionTypes';

export const addToCart = payload => ({
  type: shopActionTypes.ADD_TO_CART,
  payload,
});

export const clearCart = () => ({
  type: shopActionTypes.CLEAR_CART,
});
