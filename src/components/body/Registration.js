import React, { Component } from 'react';
import store from "../../redux/store";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class Registration extends Component {

  logIn() {
    store.dispatch({
      type: 'LOGIN'
    })
  }

  render() {
    return this.props.isLoggedIn === true ?
      <Redirect to='/loggedIn'/>

      :
      <div className='container' className='text-center'>
        <button className='btn-primary' onClick={() => this.logIn()}>Register</button>
      </div>
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn

});
export default connect(mapStateToProps)(Registration);