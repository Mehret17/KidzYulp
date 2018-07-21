import React from 'react';
import { Link } from 'react-router-dom';

import activityRequests from '../../firebaseRequests/activity';
import './Activity.css';
import SingleActivity from '../SingleActivity/SingleActivity';
// import AddNewActivity from '../../AddNewActivity/AddNewActivity';
import newActivityRequests from '../../firebaseRequests/addnewactivity';
// import AddNewActivity from '../AddNewActivity/AddNewActivity';


class Activity extends React.Component {
  state = {
    activities: [],
    // isClicked: false,
  }

  formSubmitEvent = (newActivity) => {
    newActivityRequests.postNewActivity(newActivity)
      .then(() => {
        // newActivityRequests.getNewActivity()
        //   .then((activities) => {
            // this.setState({ newActivity });
          // });
      })
      .catch((err) => {
        console.error('error with activity post', err);
      })
  }

  componentDidMount() {
    activityRequests
      .getRequest()
      .then((activities) => {
        newActivityRequests.getNewActivity()
        .then((newactivities) => {
        this.setState({ activities:[...activities,...newactivities] });
      })
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
          {/* {this.state.isClicked ?
            <AddNewActivity 
            onSubmit={this.formSubmitEvent}/> :
            ""}
          <button
            onClick={this.showForm}>
            Add New Activity</button> */}
          <button><Link to={{pathname:"/addnewactivity",onSubmit:this.formSubmitEvent}}>Add New Activity</Link></button>
          {activityComponents}
        </div>
      </div>
    );
  }
}

export default Activity;
