import {FILTER_BY_TEXT, SORT_BY_AMOUNT, SORT_BY_DATE, SET_STARTING_DATE, SET_ENDING_DATE} from '../actionTypes'

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
    case SORT_BY_AMOUNT:
      return {...state, sortBy: 'amount'}
    case SORT_BY_DATE:
      return {...state, sortBy: 'date'}
    case SET_STARTING_DATE:
      return {...state, startingDate: action.startingDate}
    case SET_ENDING_DATE:
      return {...state, endingDate: action.endingDate}
    default:
      return state;
  }
}