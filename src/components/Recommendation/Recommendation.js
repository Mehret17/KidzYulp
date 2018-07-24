import React from 'react';
import addNewActivityRequests from '../../firebaseRequests/addnewactivity';
import authRequests from '../../firebaseRequests/auth';

import SingleRecommendation from '../SingleRecommendation/SingleRecommendation';
import './Recommendation.css';


class Recommendation extends React.Component {
  state = {
    addedNewActivities: [],
  };

  // componentDidMount() {
  //   this.updatedComponent();
  // };

  updateComponent = () => {
    addNewActivityRequests
    .getNewActivities(authRequests.getUid())
    .then((addedNewActivities) => {
      this.setState({ addedNewActivities });
    })
    .catch((err) => {
      console.error('error with fis get request', err);
    });
  }

  componentDidMount = () => {
    this.updateComponent();
  };

  deleteOrderClick = (firebaseId) => {
    // const firebaseId = this.recomDetails.id;
    // const {updatedComponent} = this.props.updatedComponent;
    addNewActivityRequests
      .deleteNewActivity(firebaseId)
      .then(() => { 
        this.updateComponent();
      })
      .catch(((err) => {
        console.error('error with delete request', err)
      }));
  }; 
  render() {
    const newActivityComponent = this.state.addedNewActivities.map((newActivity) => {
      return (
        <SingleRecommendation
          key={newActivity.id}
          recomDetails={newActivity}
          onClick={this.deleteOrderClick}
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
