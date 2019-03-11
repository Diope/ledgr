import React from 'react';
import BudgetList from './BudgetList'
import BudgetListFilter from './BudgetListFilter'

const Dashboard = () => {
  return ( 
    <React.Fragment>
      <BudgetListFilter />
      <BudgetList />
    </React.Fragment>
    );
}
 
export default Dashboard;