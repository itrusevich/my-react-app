import React, {Component} from 'react';
import store from "../../redux/store";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  logOut() {
    store.dispatch({
      type: 'LOGOUT'
    })
  }

  render() {
    return this.props.isLoggedIn === false ?
      <Redirect to='/'/>
      :
      <div className='container' className='text-center'>
        <button className='btn-block' onClick={() => this.logOut()}>Logout</button>
      </div>

  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn

});
export default connect(mapStateToProps)(LoggedIn);