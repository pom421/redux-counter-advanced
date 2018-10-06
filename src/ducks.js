// ducks -> pour la 2ème syllabe de re-dux. C'est une façon d'organiser
// types, actions creators, reducers

// action creators
export const increment = (id) => ({
  type: "INC",
  payload: {
    id
  }
})

export const decrement = (id) => ({
  type: "DEC",
  payload: {
    id
  }
})

export const reset = (id, defaultCount) => ({
  type: "RESET",
  payload: {
    id,
    defaultCount
  }
})

// fonction pour ajouter le state d'un Counter s'il n'existait pas encore
const buildStateIfMissing = (state, action) => {
  let elt = state.filter(c => c.id === action.payload.id)

  if (!elt.length) {
    elt = {
      id: action.payload.id,
      count: action.payload.defaultCount ? action.payload.defaultCount : 0,
      defaultCount: action.payload.defaultCount
    }
  }

  return state.concat([elt]) // concat pour ne pas muter le state
}

// reducers
export default function countReducer(state = [], action) {

  switch (action.type) {
    case "INC":

      const res = state.map(c => {
        return action.payload.id !== c.id ? c : ({ ...c,
          count: c.count + 1
        })
      })
      return res
    case "DEC":

      return state.map(c => {
        return action.payload.id !== c.id ? c : { ...c,
          count: c.count - 1
        }
      })
    case "RESET":
      state = buildStateIfMissing(state, action)
      // return {
      //   count: state.count - action.payload
      // }
      return state.map(c => {
        return action.payload.id !== c.id ? c : { ...c,
          count: c.defaultCount
        }
      })
    default:
      return state
  }
}