import React from 'react'
import {connect} from 'react-redux'
import {filterByText} from '../../redux/actions/filtering.action'

const BudgetListFilter = (props) => {
  return ( 
    <div>
      <input type="text" value={props.filters.text} onChange={(e) => {props.dispatch(filterByText(e.target.value))}}/>
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BudgetListFilter);