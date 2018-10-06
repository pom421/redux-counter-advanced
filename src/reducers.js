import types from "./types"

export const countReducer = (state = {defaultCount: 0, count: 0 }, action) => {
  if (state.defaultCount && !state.count) {
    state.count = state.defaultCount
  }
  switch(action.type) {
    case types.INC:
      return {
        count: state.count + 1
      }
    case types.DEC:
      return {
        count: state.count - 1
      }
    case types.RESET:
      return state.defaultCount 
        ? {
            count: state.defaultCount
        }
        : {
          count: 0  
        }
    default:
      return state
  }
}
