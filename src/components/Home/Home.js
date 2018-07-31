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
      </div>
    );
  }
}

export default Home;