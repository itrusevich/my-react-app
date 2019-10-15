import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';

class Login extends Component {

  logIn() {
    store.dispatch({
      type: 'LOGIN'
    })
  }

  render() {
    return (
      <div>
        <div className='container' style={{textAlign:"center"}}>
          <button className='btn-primary' onClick={() => this.logIn()}>Login</button>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({

});
export default connect(mapStateToProps)(Login);