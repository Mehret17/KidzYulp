import React from 'react';
import { Link } from 'react-router-dom';
// import StarRatingComponent from 'react-star-rating-component';


import activityRequests from '../../firebaseRequests/activity';
import './Activity.css';
import SingleActivity from '../SingleActivity/SingleActivity';
import myCollectionRequests from '../../firebaseRequests/mycollection';
import newActivityRequests from '../../firebaseRequests/addnewactivity';
import authRequests from '../../firebaseRequests/auth';


class Activity extends React.Component {
  state = {
    activities: [],
    mycollection: {},
  }

  saveActivity = (activities) => {
    const collection = { ...this.state.mycollection };
    collection.name = activities.name;
    collection.imgUrl = activities.imgUrl;
    collection.activityUrl = activities.activityUrl;
    collection.time = activities.time;
    collection.address = activities.address;
    collection.type = activities.type;
    collection.theme = activities.theme;
    collection.description = activities.description;
    collection.uid = authRequests.getUid();
    myCollectionRequests
      .postRequest(collection)
      .then(() => {
        this.props.history.push('/mycollection');
      })
      .catch((err) => {
        console.error('error in my collection post', err)
      })
  };

  formSubmitEvent = (newActivity) => {
    newActivityRequests.postNewActivity(newActivity)
      .then(() => {
      })
      .catch((err) => {
        console.error('error with activity post', err);
      })
  };

  componentDidMount() {
    activityRequests
      .getRequest()
      .then((activities) => {
        newActivityRequests.getNewActivity()
          .then((newactivities) => {
            this.setState({ activities: [...activities, ...newactivities] });
          })
      })
      .catch((err) => {
        console.error('error with activity get request', err);
      });
  }

  // onChange = (e) => {
  //   this.setState({search: e.target.value });
  // };

  render() {
    const activityComponents = this.state.activities.map((activity) => {
      return (
        <SingleActivity
          key={activity.id}
          details={activity}
          saveActivity={this.saveActivity}
        />
      )
    });
    return (
      <div className="header">
        <h1>Activity</h1>
        <div className="mainBody">
          <button>
            <Link to={{ pathname: "/addnewactivity", onSubmit: this.formSubmitEvent }}>Add New Activity</Link></button>
          {activityComponents}
        </div>
      </div>
    );
  }
}

export default Activity;
