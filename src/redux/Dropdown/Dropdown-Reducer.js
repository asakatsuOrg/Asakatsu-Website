import { DROP_DOWN } from "./Dropdown-Types";

const initialValue = {
  isOpen: false,
};

export const dropdownReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case DROP_DOWN:
      return { ...state, isOpen: payload };
    default:
      return state;
  }
};
