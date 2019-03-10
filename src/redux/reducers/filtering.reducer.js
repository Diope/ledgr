import {FILTER_BY_TEXT} from '../actionTypes'

const initialState = {
  text: '',
  sortBy: 'date',
  startingDate: undefined,
  endingDate: undefined
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}