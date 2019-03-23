import React, { Component } from 'react';
import {connect} from 'react-redux'
import {firebaseLogin} from '../../redux/actions/auth.action'

class LogIn extends Component {
  constructor(props){
    super(props)

    this.state = { 
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  render() { 

    const {firebaseLogin} = this.props

    return ( 
      <div onSubmit>
        <button onClick={firebaseLogin}>Log In</button>
      </div>
     );
  }
}

const mapDispatchToProps = (dispatch) => ({
  firebaseLogin: () => dispatch(firebaseLogin())
})
 
export default connect(undefined, mapDispatchToProps)(LogIn);