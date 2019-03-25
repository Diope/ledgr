import React, {Component} from 'react';
import {connect} from 'react-redux'

import BudgetForm from '../Container/BudgetForm'
import {firebaseAddBudget} from '../../redux/actions/budgeting.action'
import { ContentContainer } from '../../styles/SharedStyles';
import { TotalHeaderTitle, TotalHeader } from '../../styles/StyledBudgetTotal';

class CreateBudget extends Component {

    handleSubmit = (budget) => {
      this.props.firebaseAddBudget(budget);
      this.props.history.push('/');
    }

    render () {
      return (
        <>
          <TotalHeader>
            <ContentContainer>
              <TotalHeaderTitle>Create A Budget</TotalHeaderTitle>
            </ContentContainer>
          </TotalHeader>
          <ContentContainer>
            <BudgetForm 
              onSubmit={this.handleSubmit}
            />
          </ContentContainer>
        </>
      )
    }
}

const mapDispatchToProps = (dispatch) => ({
  firebaseAddBudget: (budget) => dispatch(firebaseAddBudget(budget))
})
 
export default connect(undefined, mapDispatchToProps)(CreateBudget);