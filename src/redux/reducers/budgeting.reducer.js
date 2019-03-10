import {ADD_BUDGET_ITEM, REMOVE_BUDGET_ITEM} from '../actionTypes'

const initialState = [];

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_BUDGET_ITEM:
      return [...state, action.budget]
    case REMOVE_BUDGET_ITEM:
      return state.filter(({id}) => id !== action.id ;
    default:
      return state;
  }
}