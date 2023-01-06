import { DROP_DOWN } from "./Dropdown-Types";

export const dropdownAction = (isOpen) => ({
  type: DROP_DOWN,
  payload: !isOpen,
});
