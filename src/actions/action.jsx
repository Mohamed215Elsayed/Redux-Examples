import { INCREMENT, DECREMENT, RESET } from '../type/type'
export const inc = () => {
    return {
        type: INCREMENT
    }
}

export const dec = () => {
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const LOG = () => {
    return {
        type: "LOGIN"
    }
}

export const Not_log = () => {
    return {
        type: "NOT_LOGIN"
    }
}