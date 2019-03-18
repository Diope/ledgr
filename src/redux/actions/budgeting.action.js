import {ADD_BUDGET_ITEM, REMOVE_BUDGET_ITEM, EDIT_BUDGET_ITEM} from '../actionTypes'
import uuid from 'uuid/v4'
import database from '../../firebase/connect'

export const addBudgetItem = (budget) => ({
  type: ADD_BUDGET_ITEM,
  budgets: budget
});

export const firebaseAddBudget = (budgetData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = budgetData;
    const budget = {description, note, amount, createdAt}

    database.ref('budgets').push(budget)
      .then((ref) => {
        dispatch(addBudgetItem({
          id: ref.key,
          ...budget
        }))
      })
  }
}

export const removeBudgetItem = ({id}) => ({
  type: REMOVE_BUDGET_ITEM,
  id
})

export const editBudgetItem = (id, updates) => ({
  type: EDIT_BUDGET_ITEM,
  id,
  updates
})