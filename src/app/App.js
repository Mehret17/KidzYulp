import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';
import './App.css';

import Activity from '../components/Activity/Activity';
// import AddNewActivity from '../components/AddNewActivity/AddNewActivity';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
// import MyCollection from '../components/MyCollection/MyCollection';
import Navbar from '../components/Navbar/Navbar';
// import Recommendation from '../components/Recommendation/Recommendation';
import Register from '../components/Register/Register';
// import SingleActivity from '../components/SingleActivity/SingleActivity';
import fbConnection from '../firebaseRequests/connection';
fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: '/activity', sate: {from: props.location}}}
            />
          )
      }
    />
  )
}



class App extends Component {
  state={
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  } 

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <PublicRoute
                  path="/activity"
                  authed={this.state.authed}
                  component={Activity}
                  />
                   <PublicRoute
                  path="/register"
                  authed={this.state.authed}
                  component={Register}
                  />
                   <PublicRoute
                  path="/login"
                  authed={this.state.authed}
                  component={Login}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
