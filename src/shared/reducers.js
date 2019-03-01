import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as brief } from "../features/brief";
// import { reducer as list } from "../features/list";

// Combines all reducers to the store
export default combineReducers({
  form: formReducer,
  brief
  //   list
});
