import React, {Component} from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid'

import {DateRangePicker} from 'react-dates'
import {filterByText, sortByDate, sortByAmount, setStartingDate, setEndingDate} from '../../redux/actions/filtering.action'

class BudgetListFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickerFocused: null
    }

    this.handleDatesChange = this.handleDatesChange.bind(this)
    this.handleFocusChange = this.handleFocusChange.bind(this)
  }

  handleDatesChange = ({startDate, endDate}) => {
    console.log(startDate);
    this.props.dispatch((setStartingDate(startDate)));
    this.props.dispatch(setEndingDate(endDate));
  }

  handleFocusChange = (pickerFocused) => {
    this.setState(() => ({pickerFocused}));
  }
  
  render () {
    // console.log(this.props.filters.endingDate);

    return ( 
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={(e) => {this.props.dispatch(filterByText(e.target.value))}}
        />
        <select 
          value={this.props.filters.sortBy} 
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate())
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount())
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId={uuid()}
          endDateId={uuid()}
          startDate={this.props.filters.startingDate}
          endDate={this.props.filters.endingDate}
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.pickerFocused}
          onFocusChange={this.handleFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BudgetListFilter);