  import React, { Component } from 'react';
  import Login from './body/Login';
  import Registration from './body/Registration';
  import About from './body/About';
  import Users from './body/Users';
  import LoggedIn from './body/LoggedIn';
  import { connect } from 'react-redux';


  class Body extends Component {

    render() {
      return (
        <div>
          {this.props.page === 'registration' && <Registration />}
          {this.props.page === 'about' &&  <About />}
          {this.props.page === 'users' && <Users />}
          {this.props.page === 'login' && <Login />}
          {this.props.page === 'loggedIn' && <LoggedIn />}
        </div>
      );
    }
  }


  const mapStateToProps = state => ({
      page: state.page
  });
  export default connect(mapStateToProps)(Body);
