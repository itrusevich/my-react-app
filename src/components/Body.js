import React, {Component} from 'react';
import Login from './body/Login';
import Registration from './body/Registration';
import About from './body/About';
import Users from './body/Users';
import LoggedIn from './body/LoggedIn';
import Error from './body/Error'
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';


class Body extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/registration' exact component={Registration}/>
          <Route path='/about' exact component={About}/>
          <Route path='/users' exact component={Users}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/loggedIn' exact component={LoggedIn}/>
          <Route component={Error}/>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  page: state.page
});
export default connect(mapStateToProps)(Body);
