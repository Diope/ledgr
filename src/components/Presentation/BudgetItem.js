import React from 'react';
import {connect} from 'react-redux'
import {removeBudgetItem} from '../../redux/actions/budgeting.action'

const BudgetItem = ({dispatch, id, description, amount, createdAt}) => {
  return ( 
    <div>
      <h1>{description}</h1>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => {dispatch(removeBudgetItem({id}))}}>Remove Item</button>
    </div>
   );
}
 
export default connect()(BudgetItem);