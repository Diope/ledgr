import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import BudgetItem from './BudgetItem'
import getBudget from '../../helpers/getBudget'

import { firebaseSetBudgets } from '../../redux/actions/budgeting.action';

import { ContentContainer } from '../../styles/SharedStyles';
import { MobileView, DesktopView, ListHeading } from '../../styles/StyledBudgetList';
import { ListItem } from '../../styles/StyledBudgetItem';


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
          {
            this.props.budgets.length === 0 ? (
              <ListItem>
                <div className="listItem no-item-message">
                  <span>No items to list: <Link className="no-item-link" to="/create">Add an Item</Link></span>
                </div>
              </ListItem>
            ):(
              this.props.budgets.map((budget) => {
              return <BudgetItem key={budget.id} {...budget}/>
          })
            )
        }
      
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