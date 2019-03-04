import {
  IS_FETCHING_BRIEFS,
  RECEIVED_BRIEFS,
  ADD_BRIEF,
  BRIEFS_FILTER
} from "../../shared/constants/ActionTypes";

const initialState = {
  isFetchingBriefs: false,
  briefFilter: 0,
  briefs: []
};

const briefslist = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING_BRIEFS:
      return { ...state, isFetchingBriefs: !state.isFetchingBriefs };
    case RECEIVED_BRIEFS:
      return {
        ...state,
        isFetchingBriefs: !state.isFetchingBriefs,
        briefs: action.briefs
      };
    case ADD_BRIEF:
      return {
        ...state,
        briefs: [...state.briefs, action.briefValues]
      };
    case BRIEFS_FILTER:
      return {
        ...state,
        briefFilter: action.briefFilter
      };
    default:
      return state;
  }
};

export default briefslist;
