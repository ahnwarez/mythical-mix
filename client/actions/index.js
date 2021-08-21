import { getPeople } from '../apis/people'

export const SET_FRUITS = 'SET_FRUITS'

export function setFruits (people) {
  console.log(people)
  return {
    type: SET_FRUITS,
    people
  }
}

export function fetchFruits () {
  return dispatch => {
    return getPeople()
      .then(people => {
        console.log(people)
        dispatch(setFruits(people))
        return null
      })
  }
}
