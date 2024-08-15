// export const reducerAuth = (state = { isLog: true }, action) => {
//   if (action.type === 'LOGIN') {
//       return { isLog: true }
//   }
//   if (action.type === 'NOT_LOGIN') {
//       return { isLog: false }
//   }
//   return state;
// }

/****************************************************/
import { LOGIN, NOT_LOGIN } from "../type/type";
export const reducerAuth = (state = { isLog: true }, action) => {
switch (action.type) {
  case LOGIN:
    return { isLog: true };
  case NOT_LOGIN:
    return { isLog: false };
  default:
    return state;
}
}
