import {addBudgetItem, editBudgetItem, removeBudgetItem} from '../../../redux/actions/budgeting.action'
import { REMOVE_BUDGET_ITEM, EDIT_BUDGET_ITEM } from '../../../redux/actionTypes';

test('Should set up remove budget item action object', () => {
  const action = removeBudgetItem({id: '490kslj'})
  expect(action).toBe({
    type: REMOVE_BUDGET_ITEM,
    id: '490kslj'
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