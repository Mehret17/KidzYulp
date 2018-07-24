import React from 'react';
import addNewActivityRequests from '../../firebaseRequests/addnewactivity';
import authRequests from '../../firebaseRequests/auth';

import SingleRecommendation from '../SingleRecommendation/SingleRecommendation';
import './Recommendation.css';


class Recommendation extends React.Component {
  state = {
    addedNewActivities: [],
  }

  componentDidMount() {
    addNewActivityRequests
      .getNewActivities(authRequests.getUid())
      .then((addedNewActivities) => {
        this.setState({ addedNewActivities });
      })
      .catch((err) => {
        console.error('error with fis get request', err);
      });
  }
  
  render() {
    const newActivityComponent = this.state.addedNewActivities.map((newActivity) => {
      return (
        <SingleRecommendation
          key={newActivity.id}
          recomDetails={newActivity}
        />
      );
    });
    return (
      <div className="text-center">
        <h1>Recommendation</h1>
        <ul>
          {newActivityComponent}
        </ul>
      </div>
    );
  }
}

export default Recommendation;
