import types from "./types"

export const increment = () => ({
    type: types.INC
})

export const decrement = () => ({
    type: types.DEC
})

export const reset = () => ({
    type: types.RESET
})