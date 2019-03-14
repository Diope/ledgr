import React, { Component } from 'react';

import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

class BudgetForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      description: "",
      amount: "",
      note: "",
      createdAt: moment(),
      pickerFocused: false,
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleOnDateChange = this.handleOnDateChange.bind(this)
    this.handleOnFocusChange = this.handleOnFocusChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

   handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
   }

   handleAmountChange = (e) => {
     const amount = e.target.value;
     if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
       this.setState(() => ({amount}))
     }
   }

   handleOnDateChange = (createdAt) => {
     if (createdAt) {
       this.setState(() => ({createdAt}))
     }
   }

   handleOnSubmit = (e) => {
     e.preventDefault();
     if (!this.state.description || !this.state.amount) {
       this.setState(() => ({errors: "Please provide budget item description and amount before submitting."}))
     } else {
       this.setState(() => ({errors: ""}))
       this.props.onSubmit({
         description: this.state.description,
         amount: (parseFloat(this.state.amount, 10) * 100),
         createdAt: this.state.createdAt.valueOf(),
         note: this.state.note
       })
     }

   }

   handleOnFocusChange = ({focused}) => {
     this.setState(() => ({pickerFocused:focused}))
   }

  render() {
    const {description, amount, note, createdAt, pickerFocused, errors} = this.state;
    return ( 
      <div onSubmit={this.handleOnSubmit}>
        {errors && (<div><h4>{errors}</h4></div>)}
        <form>
          <input 
            type="text"
            value={description}
            onChange={this.handleChange}
            name="description"
            placeholder="Description of budget item" 
            autoFocus
          />
          <input 
            type="number" 
            placeholder="Amount of Budget Item"
            value={amount}
            name="amount"
            onChange={this.handleAmountChange}
          />
          <SingleDatePicker
            numberOfMonths={1}
            isOutsideRange={() => false }
            date={createdAt}
            onDateChange={this.handleOnDateChange}
            focused={pickerFocused}
            onFocusChange={this.handleOnFocusChange}
          />
          <textarea
            value={note}
            name="note"
            onChange={this.handleChange}
            placeholder="Add a note for budget item"
          />
          <button>Add Budget Item</button>
        </form>
      </div>
     );
  }
}
 
export default BudgetForm;