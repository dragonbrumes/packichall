import {
  IS_FETCHING_BRIEFS,
  RECEIVED_BRIEFS,
  ADD_BRIEF
} from "../../shared/constants/ActionTypes";

const initialState = {
  isFetchingBriefs: false,
  briefs: []
};

const briefslist = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING_BRIEFS:
      // console.log("IS_FETCHING");
      return { ...state, isFetchingBriefs: !state.isFetchingBriefs };
    case RECEIVED_BRIEFS:
      // console.log("RECEIVED_BRIEFS");
      return {
        ...state,
        isFetchingBriefs: !state.isFetchingBriefs,
        briefs: action.briefs
      };
    case ADD_BRIEF:
      // console.log("ADD_BRIEF");
      return {
        ...state,
        briefs: [...state.briefs, action.briefValues]
      };
    default:
      return state;
  }
};

export default briefslist;
