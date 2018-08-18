import React from 'react';
import addNewActivityRequests from '../../firebaseRequests/addnewactivity';
import authRequests from '../../firebaseRequests/auth';

import SingleRecommendation from '../SingleRecommendation/SingleRecommendation';
import './Recommendation.css';


class Recommendation extends React.Component {
  state = {
    addedNewActivities: [],
    firebaseId: '',
  };

  updateComponent = () => {
    addNewActivityRequests
      .getNewActivities(authRequests.getUid())
      .then((addedNewActivities) => {
        this.setState({ addedNewActivities });
      })
      .catch((err) => {
        console.error('error with fis get request', err);
      });
  };

  componentDidMount = () => {
    this.updateComponent();
  };

  deleteActivityClick = (firebaseId) => {
    addNewActivityRequests
      .deleteNewActivity(firebaseId)
      .then(() => {
        this.updateComponent();
      })
      .catch(((err) => {
        console.error('error with delete request', err)
      }));
  };

  updateRecommendationClick = (updatedActivity) => {
    return addNewActivityRequests
      .updateRecommendation(updatedActivity.id, updatedActivity)
      .then(() => {
        this.updateComponent();
      })
  };

  render() {
    const newActivityComponent = this.state.addedNewActivities.map((newActivity) => {
      return (
        <SingleRecommendation
          key={newActivity.id}
          recomDetails={newActivity}
          onClick={this.deleteActivityClick}
          onSubmit={this.updateRecommendationClick}
        />
      );
    });

    return (
      <div>
        {/* <h1>Recommendation</h1> */}
        <ul>
          {newActivityComponent}
        </ul>
      </div>
    );
  }
}

export default Recommendation;
