import {
  IS_FETCHING_PRODUCTS,
  RECEIVED_PRODUCTS
} from "../../shared/constants/ActionTypes";

const initialState = {
  isFetchingProducts: false,
  products: []
};

const briefForm = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING_PRODUCTS:
      // console.log("IS_FETCHING");
      return { ...state, isFetchingProducts: !state.isFetchingProducts };
    case RECEIVED_PRODUCTS:
      // console.log("RECEIVED_PRODUCTS");
      return {
        ...state,
        products: action.products,
        isFetchingProducts: !state.isFetchingProducts
      };
    default:
      return state;
  }
};

export default briefForm;
