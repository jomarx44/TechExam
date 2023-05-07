import {shopActionTypes} from './actionTypes';

const initialState = {
  categories: [],
  fetchCategories: true,
  isFetchingStoreList: true,
  storeList: [],
  usersCart: [],
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.ADD_TO_CART:
      return {
        ...state,
        usersCart: action.payload,
      };
    case shopActionTypes.CLEAR_CART:
      return {
        ...state,
        usersCart: [],
      };

    default:
      return state;
  }
};

export default shopReducer;
