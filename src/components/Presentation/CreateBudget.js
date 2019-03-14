import React from 'react';
import {connect} from 'react-redux'

import BudgetForm from '../Container/BudgetForm'
import {addBudgetItem} from '../../redux/actions/budgeting.action'

const CreateBudget = (props) => (
    <div>
      <h1>
        Create A Budget
      </h1>
      <BudgetForm 
        onSubmit={(budget) => {
          props.dispatch(addBudgetItem(budget));
          props.history.push("/")
        }}
      />
    </div>
)
 
export default connect()(CreateBudget);