import React from 'react';

import './Recommendation.css';
import Addnewactivity from '../../firebaseRequests/addnewactivity';

class Recommendation extends React.Component {
  render () {
    return (
      <div className="Recommendation">
      <h1>Recommendation</h1>
      <Addnewactivity
      //  onSubmit={this.formSubmitEvent}
       />
      </div>
    );
  }
}

export default Recommendation;