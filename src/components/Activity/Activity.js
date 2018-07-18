import React from 'react';

import activityRequests from '../../firebaseRequests/activity';

import './Activity.css';

class Activity extends React.Component {
  state = {
    activities: [],
  }
  
  componentDidMount () {
    activityRequests
      .getRequest()
      .then((activities) => {
        this.setState({activities});
      })
      .catch((err) => {
        console.error('error with activity get request', err);
      });
  }

  render () {
    const activityComponents = this.state.activities.map((activity) => {
      return (
        <h2>{activity.activityName}</h2>
      )
    });
    return (
      <div className="Activity">
      <h1>Activity</h1>
      {activityComponents}
      </div>
    );
  }
}

export default Activity;
