import React from 'react';
import {connect} from 'react-redux'
import numeral from 'numeral'
import {Link} from 'react-router-dom'

import {TotalHeader, TotalHeaderTitle, TotalHeaderAction} from '../../styles/StyledBudgetTotal';
import {ContentContainer} from '../../styles/SharedStyles'

import budgetTotal from '../../helpers/budgetTotal'
import getBudget from '../../helpers/getBudget'

const BudgetTotal = ({budgetCount, budgetTotal}) => {

  const expenditurePluralize = budgetCount === 1 ? 'Expenditure' : 'Expenditures';
  const usdFormattedTotal = numeral(budgetTotal/100).format('$0,0.00')
  return ( 
    <TotalHeader>
      <ContentContainer>
        <TotalHeaderTitle>
          <span>{budgetCount}</span> {expenditurePluralize} totaling: <span>{usdFormattedTotal}</span>
          <TotalHeaderAction>
            <Link to="/create" className="button">Add Budget Item</Link>
          </TotalHeaderAction>
        </TotalHeaderTitle>
      </ContentContainer>
    </TotalHeader>
  );
}

const mapStateToProps = (state) => {
  const visibleBudget = getBudget(state.budgets, state.filters)
  console.log(state)

  return {
    budgetCount: visibleBudget.length,
    budgetTotal: budgetTotal(visibleBudget)
  }
}
 
export default connect(mapStateToProps)(BudgetTotal);