import { CURRENT_USER } from "./User-Types";
export const userAction = (user) => ({ type: CURRENT_USER, payload: user });
