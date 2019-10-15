  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import store from '../redux/store';

  class Header extends Component {

    changePage(page) {
      store.dispatch({
        type: 'PAGE',
        payload: page
      })
    }

    click() {store.dispatch({type: 'CLICK'})}

    handleLogIn(isLoggedIn){
      if (!isLoggedIn){
        this.changePage('login')
      } else {
        store.dispatch({
          type: isLoggedIn ? 'LOGOUT' : 'LOGIN'})
      }
    }

    render() {
      return (
        <div className='card-footer text-center'>
          <button className='mr-1' onClick={() => this.handleLogIn(this.props.isLoggedIn)}>
            {this.props.isLoggedIn ? 'Logout' : 'Login'}
          </button>
          <button className='mr-1' onClick={() => this.changePage('registration')}>Register</button>
          <button className='mr-1' onClick={() => this.changePage('users')}>Users</button>
          {this.props.isLoggedIn && <button className='mr-1' onClick={() => this.changePage('about')}>About</button>}
          <button onClick={() => this.click()}>Increment</button>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn

  });
  export default connect(mapStateToProps)(Header);
