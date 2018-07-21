import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';



import './App.css';

import Activity from '../components/Activity/Activity';
import AddNewActivity from '../components/AddNewActivity/AddNewActivity';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
// import MyCollection from '../components/MyCollection/MyCollection';
import Navbar from '../components/Navbar/Navbar';
import Recommendation from '../components/Recommendation/Recommendation';
import Register from '../components/Register/Register';
// import SingleActivity from '../components/SingleActivity/SingleActivity';
import fbConnection from '../firebaseRequests/connection';
fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: '/login', sate: {from: props.location}}}
            />
          )
      }
    />
  )
};

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
};

class App extends Component {
  state={
    authed: false,
  }

  // formSubmitEvent = (newActivity) => {
  //   newActivityRequests.postNewActivity(newActivity)
  //   .then(() => {
  //     newActivityRequests.getNewActivity()
  //     .then((activities) => {
  //       this.setState({activities});
  //     });
  //   })
  //   .catch((err) => {
  //     console.error('error with activity post', err);
  //   })
  // }

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

  signOut = () => {
    this.setState({authed: false});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              signOut={this.signOut}
              />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <PrivateRoute
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
                   <PrivateRoute
                  path="/addnewactivity"
                  authed={this.state.authed}
                  component={AddNewActivity}
                  />
                   <PrivateRoute
                  path="/recommendation"
                  authed={this.state.authed}
                  component={Recommendation}
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
