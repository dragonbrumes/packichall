import {
  IS_FETCHING,
  RECEIVED_PRODUCTS,
  RECEIVED_BRIEFS,
  ADD_BRIEF
} from "../../shared/constants/ActionTypes";

const initialState = {
  isFetching: false,
  products: [],
  briefs: [],
  newBrief: {}
};

const brief = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      console.log("IS_FETCHING");
      return { ...state, isFetching: !state.isFetching };
    case RECEIVED_PRODUCTS:
      console.log("RECEIVED_PRODUCTS");
      return {
        ...state,
        products: action.products,
        isFetching: !state.isFetching
      };
    case RECEIVED_BRIEFS:
      console.log("RECEIVED_BRIEFS");
      return {
        ...state,
        briefs: action.briefs,
        isFetching: !state.isFetching
      };
    case ADD_BRIEF:
      console.log("ADD_BRIEF");
      return {
        ...state,
        newBrief: action.briefValues
      };
    default:
      return state;
  }
};

export default brief;
