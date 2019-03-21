import {ADD_BUDGET_ITEM, REMOVE_BUDGET_ITEM, EDIT_BUDGET_ITEM, SET_BUDGET_ITEM} from '../actionTypes'
import uuid from 'uuid/v4'
import database from '../../firebase/connect'

export const addBudgetItem = (budget) => ({
  type: ADD_BUDGET_ITEM,
  budgets: budget
});

export const removeBudgetItem = ({id}) => ({
  type: REMOVE_BUDGET_ITEM,
  id
})

export const editBudgetItem = (id, updates) => ({
  type: EDIT_BUDGET_ITEM,
  id,
  updates
})

// ---- FIREBASE ACTIONS

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

export const setBudgets = (budgets) => ({
  type: SET_BUDGET_ITEM,
  budgets
});

export const firebaseSetBudgets = () => {
  return (dispatch) => {
    return database.ref('budgets').once('value').then((snapshot) => {
      const budgets = [];

      snapshot.forEach((childSnapshot) => {
        budgets.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setBudgets(budgets))
    })
  }
}