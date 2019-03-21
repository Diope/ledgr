import React, {Component} from 'react';
import {connect} from 'react-redux'
import BudgetItem from './BudgetItem'
import getBudget from '../../helpers/getBudget'
import { firebaseSetBudgets } from '../../redux/actions/budgeting.action';

class BudgetList extends Component {

  componentDidMount = () => {
    this.props.firebaseSetBudgets()
  }
  

  render() {
    return (
    <div>
      <h1>My Budget</h1>
      {this.props.budgets.map((budget) => {
        return <BudgetItem key={budget.id} {...budget}/>
      })}
      
    </div>
   );
  }
}

const mapStateToProps = (state) => {
  return {
    budgets: getBudget(state.budgets, state.filters)
  }
}
 
export default connect(mapStateToProps, {firebaseSetBudgets})(BudgetList);