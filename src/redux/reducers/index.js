import {combineReducers} from 'redux'

import budgetReducer from '../reducers/budgeting.reducer'
import filteringReducer from '../reducers/filtering.reducer'
import authReducer from '../reducers/auth.reducer'

export default combineReducers({
  budgets: budgetReducer,
  filters: filteringReducer,
  auth: authReducer
})