import React, { Component } from 'react';

import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import { TextInput, TextArea } from '../../styles/Inputs';
import { Button } from '../../styles/Button';
import { Form, FormError } from '../../styles/Form';

class BudgetForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      description: props.budget ? props.budget.description : "",
      amount: props.budget ? (props.budget.amount / 100).toString() : '',
      note: props.budget ? props.budget.note : "",
      createdAt: props.budget ? moment(props.budget.createdAt) : moment(),
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
       this.setState(() => ({errors: "Please provide budget item: description, amount, and date before submitting."}))
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
        {errors && (<FormError><h4>{errors}</h4></FormError>)}
        <Form>
          <TextInput 
            type="text"
            value={description}
            onChange={this.handleChange}
            name="description"
            placeholder="Description" 
            autoFocus
          />
          <TextInput 
            type="number" 
            placeholder="Amount"
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
          <TextArea
            value={note}
            name="note"
            onChange={this.handleChange}
            placeholder="Notes (optional)"
          />
          <div>
            <Button>Add Budget Item</Button>
          </div>
        </Form>
      </div>
     );
  }
}
 
export default BudgetForm;