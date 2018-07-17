import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

// import Activity from '../components/Activity/Activity';
// import AddNewActivity from '../components/AddNewActivity/AddNewActivity';
import Home from '../components/Home/Home';
// import Login from '../components/Login/Login';
// import MyCollection from '../components/MyCollection/MyCollection';
// import Navbar from '../components/Navbar/Navbar';
// import Recommendation from '../components/Recommendation/Recommendation';
// import Register from '../components/Register/Register';
// import SingleActivity from '../components/SingleActivity/SingleActivity';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
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
