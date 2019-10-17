import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../redux/store';
import {Link} from 'react-router-dom';

class Header extends Component {

  changePage(page) {
    store.dispatch({
      type: 'PAGE',
      payload: page
    })
  }

  click() {
    store.dispatch({type: 'CLICK'})
  }

  handleLogIn(isLoggedIn) {
    if (!isLoggedIn) {
      this.changePage('login')
    } else {
      store.dispatch({
        type: isLoggedIn ? 'LOGOUT' : 'LOGIN'
      })
    }
  }

  render() {
    return (
      <div className='card-footer text-center'>

        {this.props.isLoggedIn ?
          <button className='mr-1' onClick={() => this.handleLogIn(this.props.isLoggedIn)}>Logout</button>
          :
          <Link to='/'><button className='mr-1'> Login</button></Link>
        }

        {!this.props.isLoggedIn && <Link to='registration'><button className='mr-1'>Register</button></Link>}
        {this.props.isLoggedIn && <Link to='users'><button className='mr-1'>Users</button></Link>}
        <Link to='about'><button className='mr-1'>About</button></Link>
        <button onClick={() => this.click()}>Increment</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn

});
export default connect(mapStateToProps)(Header);
