import React, {Component} from 'react';
import {connect} from 'react-redux'

import BudgetForm from '../Container/BudgetForm'
import {firebaseAddBudget} from '../../redux/actions/budgeting.action'

class CreateBudget extends Component {

    handleSubmit = (budget) => {
      this.props.firebaseAddBudget(budget);
      this.props.history.push('/');
    }

    render () {
      return (
        <div>
          <h1>
            Create A Budget
          </h1>
          <BudgetForm 
            onSubmit={this.handleSubmit}
          />
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => ({
  firebaseAddBudget: (budget) => dispatch(firebaseAddBudget(budget))
})
 
export default connect(undefined, mapDispatchToProps)(CreateBudget);