import React from 'react';
import {connect} from 'react-redux'

import BudgetForm from '../Container/BudgetForm'
import {editBudgetItem, removeBudgetItem} from '../../redux/actions/budgeting.action'

const EditBudget = (props) => {
  return ( 
    <div>
      <BudgetForm
        budget={props.budget}
        onSubmit={(budget) => {
          props.dispatch(editBudgetItem(props.budget.id, budget))
          props.history.push("/")
        }} 
      />
      <button
        onClick={() => {
          props.dispatch(removeBudgetItem({id: props.budget.id}));
          props.history.push("/")
      }}
      >Delete Item</button>
    </div>
    );
}

const mapToStateToProps = (state, props) => {
  return {
    budget: state.budgets.find((budget) => budget.id === props.match.params.id)
  }
}
 
export default connect(mapToStateToProps)(EditBudget);