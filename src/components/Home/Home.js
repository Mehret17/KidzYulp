import React from 'react';
// import { Redirect } from 'react-router-dom';

import './Home.css';

class Home extends React.Component {
  render () {
    return (
      <div className="Home">
      {/* <h1>KidZYulp</h1> */}
      {/* <Redirect
        to={{ pathname: this.props.authed ? '/activity' : '/login' }}
      /> */}
      <h1> KidzYulp </h1>
      <button className="btn btn homeButton"></button>
      </div>
    );
  }
}

export default Home;