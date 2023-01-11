import { createStore } from "redux";
import { rootReducer } from "./Root-Reducers";

export const store = createStore(rootReducer);
