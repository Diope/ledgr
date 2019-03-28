import {addBudgetItem, editBudgetItem, removeBudgetItem, firebaseAddBudget} from '../../../redux/actions/budgeting.action'
import { REMOVE_BUDGET_ITEM, EDIT_BUDGET_ITEM, ADD_BUDGET_ITEM, SET_BUDGET_ITEM } from '../../../redux/actionTypes';
import uuid from 'uuid/v4'
import budgetingReducer from '../../../redux/reducers/budgeting.reducer';
import budgets from '../../fixtures/budgets'
import database from '../../../firebase/connect'

import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store' 

const createMockStore = configureMockStore([thunk])

// beforeEach((done) => {
//   const budgetData = {};

//   budgets.forEach(({id, description, amount, note, createdAt}) => {
//     budgetData[id] = {description, amount, note, createdAt};
//   });
//   database.ref('budgets2').set(budgetData).then(() => done());
// });

// test('should store an item on the database', () => {
//   const store = createMockStore({});
//   const budgetItem = {
//     description: 'Macbook Pro',
//     amount: 1490000,
//     note: 'I need a new one?',
//     createdAt: 1402
//   }

//   store.dispatch(firebaseAddBudget(budgetItem))
// });

test('Should remove budget line item action object', () => {
  const action = removeBudgetItem({id: '490kslj'})
  expect(action).toEqual({
    type: REMOVE_BUDGET_ITEM,
    id: '490kslj'
  });
})


test('Should successfully trigger the addBudgetItem action', () => {
  const idData = uuid()

  const testBudgetData = {
    id: idData,
    description: 'Kittie concert tickets',
    amount: 110500,
    createdAt: 9201,
    note: 'Does anyone remember the song brackish?'
  }
  const action = addBudgetItem(testBudgetData);
  expect(action).toEqual({
    type: ADD_BUDGET_ITEM,
    budgets: {...testBudgetData, id: expect.any(String)}
  })
})

test('Should set up edit budget item', () => {
  const action = editBudgetItem('490kslj', {note: 'This is a note'})
  expect(action).toEqual({
    type: EDIT_BUDGET_ITEM,
    id: '490kslj',
    updates: {
      note: 'This is a note'
    }
  })
})

test('Should set budget items', () => {
  const action = {
    type: SET_BUDGET_ITEM,
    budgets: [budgets[1]]
  }

  const state = budgetingReducer(budgets, action)
  expect(state).toEqual([budgets[1]]);
})