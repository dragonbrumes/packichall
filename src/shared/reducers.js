import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as briefForm } from "../features/brief";
import { reducer as briefsList } from "../features/list";

// Combines all reducers to the store
export default combineReducers({
  form: formReducer,
  briefForm,
  briefsList
});
