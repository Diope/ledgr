import React from 'react';
import {connect} from 'react-redux'

import BudgetForm from '../Container/BudgetForm'
import {editBudgetItem, removeBudgetItem, firebaseRemoveBudget, firebaseEditBudget} from '../../redux/actions/budgeting.action'

const EditBudget = (props) => {
  
  return ( 
    <div>
      <BudgetForm
        budget={props.budget}
        onSubmit={(budget) => {
          props.firebaseEditBudget(props.budget.id, budget)
          props.history.push("/")
        }} 
      />
      <button
        onClick={() => {
          props.firebaseRemoveBudget({id: props.budget.id})
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

const mapDispatchToProps = (dispatch, props) => ({
  firebaseRemoveBudget: (id) => dispatch(firebaseRemoveBudget(id)),
  firebaseEditBudget: (id, budget) => dispatch(firebaseEditBudget(id, budget))
})
 
export default connect(mapToStateToProps, mapDispatchToProps)(EditBudget);