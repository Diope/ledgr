import {ADD_BUDGET_ITEM, REMOVE_BUDGET_ITEM, EDIT_BUDGET_ITEM} from '../actionTypes'
import uuid from 'uuid/v4'

export const addBudgetItem = ({description='', note='', amount=0, createdAt=0} = {}) => ({
  type: ADD_BUDGET_ITEM,
  budgets: { id: uuid(), description, note, amount, createdAt}
})

export const removeBudgetItem = ({id}) => ({
  type: REMOVE_BUDGET_ITEM,
  id
})

export const editBudgetItem = (id, updates) => ({
  type: EDIT_BUDGET_ITEM,
  id,
  updates
})