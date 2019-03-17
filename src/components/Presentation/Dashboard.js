import React from 'react';

import BudgetList from './BudgetList'
import BudgetListFilter from './BudgetListFilter'
import BudgetTotal from './BudgetTotal'

const Dashboard = () => {
  return ( 
    <React.Fragment>
      <BudgetTotal />
      <BudgetListFilter />
      <BudgetList />
    </React.Fragment>
    );
}
 
export default Dashboard;