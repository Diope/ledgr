import React, {Component} from 'react';
import {connect} from 'react-redux'
import BudgetItem from './BudgetItem'
import getBudget from '../../helpers/getBudget'
import { firebaseSetBudgets } from '../../redux/actions/budgeting.action';
import { ContentContainer } from '../../styles/SharedStyles';
import { MobileView, DesktopView, ListHeading } from '../../styles/StyledBudgetList';

class BudgetList extends Component {

  componentDidMount = () => {
    this.props.firebaseSetBudgets()
  }
  
  render() {
    return (
      <ContentContainer>

        <ListHeading>
          <MobileView>Budget</MobileView>
          <DesktopView>Budget Item</DesktopView>
          <DesktopView>Amount</DesktopView>
        </ListHeading>
          {this.props.budgets.map((budget) => {
            return <BudgetItem key={budget.id} {...budget}/>
          })}
      
      </ContentContainer>
   );
  }
}

const mapStateToProps = (state) => {
  return {
    budgets: getBudget(state.budgets, state.filters)
  }
}
 
export default connect(mapStateToProps, {firebaseSetBudgets})(BudgetList);