import { CURRENT_USER } from "./User-Types";

const initialValue = {
  currentUser: null,
};

export const userReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
