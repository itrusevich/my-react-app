import React, { Component } from 'react';
import store from "../../redux/store";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      login: '',
      password: '',
      error: false,
      errorText: '',
      successMessage: false,
      successMessageText: ''
    };
  }

  register() {
    const hasUser = this.props.users.find(el => el.login === this.state.login);
    if (!hasUser) {
      store.dispatch({
        type: 'ADD_USER',
        user: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          login: this.state.login,
          password: this.state.password
        }
      })
      this.setState({
        successMessage: true,
        successMessageText: 'User was created'
      })

    } else {
      this.setState({
        error: true,
        errorText: 'User already exists'
      })
    }
  }

  render() {
    return this.props.isLoggedIn === true ?
      <Redirect to='/loggedIn'/>
      :
      <div className='container' className='text-center'>
        <input placeholder='firstName' className='form-control m-2' onChange={(e) => this.setState({firstName: e.target.value})}/>
        <input placeholder='lastName' className='form-control m-2' onChange={(e) => this.setState({lastName: e.target.value})}/>
        <input placeholder='userName' className='form-control m-2'onChange={(e) => this.setState({login: e.target.value})}/> {/*from HTML*/}
        <input placeholder='password' type='password' className='form-control m-2'onChange={(e) => this.setState({password: e.target.value})}/> {/*from HTML*/}
        <button className='btn-primary' onClick={() => this.register()}>Register</button>
        {this.state.error === true && <p>{this.state.errorText}</p>}
        {this.state.successMessage === true && <p>{this.state.successMessageText}</p>}

      </div>
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  users: state.users

});
export default connect(mapStateToProps)(Registration);