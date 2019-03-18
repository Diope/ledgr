import React from 'react';
import {connect} from 'react-redux'
import numeral from 'numeral'

import budgetTotal from '../../helpers/budgetTotal'
import getBudget from '../../helpers/getBudget'

const BudgetTotal = ({budgetCount, budgetTotal}) => {

  const expenditurePluralize = budgetCount === 1 ? 'Expenditure' : 'Expenditures';
  const usdFormattedTotal = numeral(budgetTotal/100).format('$0,0.00')
  return ( 
    <div>
      <h1>{budgetCount} {expenditurePluralize} totaling: {usdFormattedTotal}</h1>
    </div>
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