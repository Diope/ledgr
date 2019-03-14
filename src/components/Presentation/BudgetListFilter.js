import React from 'react'
import {connect} from 'react-redux'
import {filterByText, sortByDate, sortByAmount} from '../../redux/actions/filtering.action'

const BudgetListFilter = (props) => {

  return ( 
    <div>
      <input type="text" value={props.filters.text} onChange={(e) => {props.dispatch(filterByText(e.target.value))}}/>
      <select 
        value={props.filters.sortBy} 
        onChange={(e) => {
          if (e.target.value === 'data') {
            props.dispatch(sortByDate())
          } else if (e.target.value === 'amount') {
            props.dispatch(sortByAmount())
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BudgetListFilter);