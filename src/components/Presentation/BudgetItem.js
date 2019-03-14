import React from 'react';
import {Link} from 'react-router-dom'

const BudgetItem = ({id, description, amount, createdAt}) => {
  return ( 
    <div>
      <h1><Link to={`/edit/${id}`}>{description}</Link></h1>
      <p>{amount} - {createdAt}</p>
    </div>
   );
}
 
export default BudgetItem;