import {ADD_BUDGET_ITEM, REMOVE_BUDGET_ITEM, EDIT_BUDGET_ITEM, SET_BUDGET_ITEM} from '../actionTypes'

const initialState = [];

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_BUDGET_ITEM:
      return [...state, action.budgets]
    case REMOVE_BUDGET_ITEM:
      return state.filter(({id}) => id !== action.id);
    case EDIT_BUDGET_ITEM:
      return state.map((budget) => {
        if (budget.id === action.id) {
          return {...budget, ...action.updates}
        } else {
          return budget
        }
      })
    case SET_BUDGET_ITEM:
      return action.budgets;
    default:
      return state;
  }
}