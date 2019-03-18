import React from 'react';
import {Link} from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'

const BudgetItem = ({id, description, amount, createdAt}) => {
  const formattedAmount = numeral(amount / 100).format('$0,0.00')
  const formattedDate = moment(createdAt).format("dddd, MMMM Do YYYY")

  return ( 
    <div>
      <h1><Link to={`/edit/${id}`}>{description}</Link></h1>
      <p>{formattedAmount} - {formattedDate}</p>
    </div>
   );
}
 
export default BudgetItem;