import { combineReducers } from "redux";

import { userReducer } from "./User/User-Reducer";
import { dropdownReducer } from "./Dropdown/Dropdown-Reducer";

export const rootReducer = combineReducers({
  currentUser: userReducer,
  isOpen: dropdownReducer,
});
