import { SET_FRUITS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRUITS:
      return action.people
    default:
      return state
  }
}

export default reducer
