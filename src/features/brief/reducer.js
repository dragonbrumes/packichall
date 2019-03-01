import { IS_FETCHING, RECEIVED_DATA } from "../../shared/constants/ActionTypes";

const initialState = {
  isFetching: false,
  products: []
};

const brief = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      console.log("IS_FETCHING");
      return { ...state, isFetching: !state.isFetching };
    case RECEIVED_DATA:
      console.log("FETCH_PRODUCTS");
      return {
        ...state,
        products: action.products,
        isFetching: !state.isFetching
      };
    default:
      return state;
  }
};

export default brief;
