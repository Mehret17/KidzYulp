import React, { Component } from 'react';

import Activity from '../components/Activity/Activity';
import AddNewActivity from '../components/AddNewActivity/AddNewActivity';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import MyCollection from '../components/MyCollection/MyCollection';
import Navbar from '../components/Navbar/Navbar';
import Recommendation from '../components/Recommendation/Recommendation';
import Register from '../components/Register/Register';
import SingleActivity from '../components/SingleActivity/SingleActivity';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Activity />
      <AddNewActivity />
      <Home />
      <Login />
      <MyCollection />
      <Navbar />
      <Recommendation />
      <Register />
      <SingleActivity />

    
      </div>
    );
  }
}

export default App;
