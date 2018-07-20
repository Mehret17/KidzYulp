import React from 'react';
import { Link } from 'react-router-dom';

import activityRequests from '../../firebaseRequests/activity';

import './Activity.css';
import SingleActivity from '../SingleActivity/SingleActivity';

class Activity extends React.Component {
  state = {
    activities: [],
  }

  componentDidMount() {
    activityRequests
      .getRequest()
      .then((activities) => {
        this.setState({ activities });
      })
      .catch((err) => {
        console.error('error with activity get request', err);
      });
  }

  render() {
    const activityComponents = this.state.activities.map((activity) => {
      return (
        <SingleActivity
          key={activity.id}
          details={activity}
        />
      )
    });
    return (
      <div className="header">
        <h1>Activity</h1>
        <div className="mainBody">
          <button><Link to="/addnewactivity">Add New Activity</Link></button>
          {activityComponents}
        </div>
      </div>
    );
  }
}

export default Activity;
