import React from 'react';
import {connect} from 'react-redux'

import BudgetForm from '../Container/BudgetForm'
import {firebaseRemoveBudget, firebaseEditBudget} from '../../redux/actions/budgeting.action'
import { ContentContainer } from '../../styles/SharedStyles';
import { TotalHeader, TotalHeaderTitle } from '../../styles/StyledBudgetTotal';
import { WarningButton } from '../../styles/Button';

const EditBudget = (props) => {
  
  return ( 
    <>
    <TotalHeader>
      <ContentContainer>
        <TotalHeaderTitle>Edit Budget Item</TotalHeaderTitle>
      </ContentContainer>
    </TotalHeader>

    <ContentContainer>
      <BudgetForm
        budget={props.budget}
        onSubmit={(budget) => {
          props.firebaseEditBudget(props.budget.id, budget)
          props.history.push("/")
        }} 
      />
      <div>
        <WarningButton
        onClick={() => {
          props.firebaseRemoveBudget({id: props.budget.id})
          props.history.push("/")
        }}
        >Delete Item</WarningButton>
      </div>
      </ContentContainer>
    </>
    );
}

const mapToStateToProps = (state, props) => {
  return {
    budget: state.budgets.find((budget) => budget.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  firebaseRemoveBudget: (id) => dispatch(firebaseRemoveBudget(id)),
  firebaseEditBudget: (id, budget) => dispatch(firebaseEditBudget(id, budget))
})
 
export default connect(mapToStateToProps, mapDispatchToProps)(EditBudget);