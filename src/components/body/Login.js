import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../../redux/store';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      error: false,
      errorText: ''
    };
  }

  passwordCheck(obj) {
    if (this.state.password !== obj.password) {
      this.setState({
        error: true,
        errorText: 'Password is incorrect'
      })
    } else {
      store.dispatch({
        type: 'LOGIN'
      })
    }
  }

  logIn() {
    const hasUser = this.props.users.find(el => el.login === this.state.login);
    if (!hasUser) {
      this.setState({
        error: true,
        errorText: 'User doesn\'t exist'
      })
    } else {
      this.passwordCheck(hasUser);
    }
  }

  render() {
    return this.props.isLoggedIn === true ?
      <Redirect to='/loggedIn'/>
      :
      <div className='container' className='text-center'>
        <input placeholder='username' className='form-control m-2' onChange={(e) => this.setState({login: e.target.value})}/> {/*from HTML*/}
        <input placeholder='password' type='password' className='form-control m-2' onChange={(e) => this.setState({password: e.target.value})}/> {/*from HTML*/}
        <button className='btn-primary' onClick={() => this.logIn()}>Login</button>
        {this.state.error === true && <p>{this.state.errorText}</p>}
      </div>
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  users: state.users

});
export default connect(mapStateToProps)(Login);