import {FILTER_BY_TEXT} from '../actionTypes'

const initialState = {
  text: '',
  sortBy: 'date',
  startingDate: undefined,
  endingDate: undefined
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_TEXT:
      return {...state, text: action.text}
    default:
      return state;
  }
}