import React from 'react';
import {Link} from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'
import { ListItem } from '../../styles/StyledBudgetItem';

const BudgetItem = ({id, description, amount, createdAt}) => {
  const formattedAmount = numeral(amount / 100).format('$0,0.00')
  const formattedDate = moment(createdAt).format("dddd, MMMM Do YYYY")

  return ( 

    <ListItem>
      <Link className="listItem" to={`/edit/${id}`}>
        <div>
          <div className="listItem__Title">{description}</div>
          <div className="listItem__span-title">{formattedDate}</div>
        </div>
        <div className="listItem__amount">{formattedAmount}</div>
      </Link>
    </ListItem>
   );
}
 
export default BudgetItem;