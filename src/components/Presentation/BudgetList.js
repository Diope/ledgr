import React from 'react';
import {connect} from 'react-redux'
import BudgetItem from './BudgetItem'
import getBudget from '../../helpers/getBudget'

const BudgetList = (props) => {
  return ( 
    <div>
      <h1>My Budget</h1>
      {props.budgets.map((budget) => {
        return <BudgetItem key={budget.id} {...budget}/>
      })}
      
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    budgets: getBudget(state.budgets, state.filters)
  }
}
 
export default connect(mapStateToProps)(BudgetList);