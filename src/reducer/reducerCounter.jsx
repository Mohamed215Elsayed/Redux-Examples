//2-create reducer to set state and change it
// export const reducerCounter = (state = { counter: 0}, action) => {

//     if (action.type === "INCREMENT") {
//         return { counter: state.counter + 1 }
//     }
//     if (action.type === "DECERMENT") {
//         return { counter: state.counter - 1 }
//     }
//     if (action.type === "RESET") {
//         return { counter: 0 }
//     }

//     return state;
// }
/*******************************************************************/
//2-create reducer to set state and change it
// export const reducerCounter = (state = { counter: 0}, action) => {

//     switch (action.type) {
//         case "INCREMENT":
//             return { counter: state.counter + 1 }
//         case "DECERMENT":
//             return { counter: state.counter - 1 }
//         case "RESET":
//             return { counter: 0 }
//         default:
//             return state;
//     }
// }
/********************************************************************/
import { INCREMENT, DECREMENT, RESET } from '../type/type'
//2-create reducer to set state and change it
// export const reducerCounter = (state = { counter: 0 }, action) => {

//     if (action.type === INCREMENT) {
//         return { counter: state.counter + 1 }
//     }
//     if (action.type === DECREMENT) {
//         return { counter: state.counter - 1 }
//     }
//     if (action.type === RESET) {
//         return { counter: 0 }
//     }

//     return state;
// }
export const reducerCounter = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case RESET:
            return { ...state, counter: 0 }
        default:
            return state;
    }
}