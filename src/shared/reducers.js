import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as briefForm } from "../features/briefForm";
import { reducer as briefsList } from "../features/briefList";

// Combines all reducers to the store
export default combineReducers({
  form: formReducer,
  briefForm,
  briefsList
});
