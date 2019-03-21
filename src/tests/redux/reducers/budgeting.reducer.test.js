import budgetReducer from '../../../redux/reducers/budgeting.reducer'
import budgets from '../../fixtures/budgets'
import { REMOVE_BUDGET_ITEM, ADD_BUDGET_ITEM, EDIT_BUDGET_ITEM } from '../../../redux/actionTypes';

describe('Testing the budgets reducer', () => {

  test('should set default set', () => {
    const state = budgetReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
  })

  test('budget should be removed by id', () => {
    const action = {
      type: REMOVE_BUDGET_ITEM,
      id: budgets[1].id
    }
    const state = budgetReducer(budgets, action);
    expect(state).toEqual([budgets[0], budgets[2]])
  })

  test('Budget should not be removed if id is not found', () => {
    const action = {
      type: REMOVE_BUDGET_ITEM,
      id: 6
    }
    const state = budgetReducer(budgets, action);
    expect(state).toEqual(budgets)
  })

  test('A new budget item should be added successfully', () => {
    const newItem = {
      id: '4',
      note: 'señorita',
      description: 'Arms',
      amount: 49992,
      createdAt: 0
    }
    const action = {
      type: ADD_BUDGET_ITEM,
      newItem
    }
    const state = budgetReducer(budgets, action);
    expect(state).toHaveLength(4)
  })

  test('A budget item should edited by passing the id', () => {

    const description = "Diles, que yo me se tu posas favorita"
    const action = {
      type: EDIT_BUDGET_ITEM,
      id: budgets[2].id,
      updates: {
        description
      }
    }
    const state = budgetReducer(budgets, action)
    expect(state[2].description).toBe(description)
  });

  test('Budget item should not be edited if id is not found', () => {
    const description = "okay this shouldn't work because the id isn't real!"
    const action = {
      type: EDIT_BUDGET_ITEM,
      id: '7',
      update: {
        description
      }
    }
    const state = budgetReducer(budgets, action)
    expect(state).toEqual(budgets)
  })

  test('A budget item should be removed if supplied with a valid id', () => {
    const action = {
      type: REMOVE_BUDGET_ITEM,
      id: '1'
    }
    const state = budgetReducer(budgets, action)
    expect(state).toEqual([budgets[1], budgets[2]]);
  })
})