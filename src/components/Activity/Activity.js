import React from 'react';
import { Link } from 'react-router-dom';
import {Slide} from 'react-slideshow-image';

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
    images: [],
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

  images = [
    'https://images.unsplash.com/photo-1471914036897-d8255336ca8a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8884129eda16111f64139706300a8cc7&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d54cdce222b083c93c0f6165307ae626&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d54cdce222b083c93c0f6165307ae626&auto=format&fit=crop&w=1000&q=60'
  ]

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
      <div className="Activity header">
        <div className="pictureHolder">
        <Slide
           images = {this.images}
           duration = {5000}
           transitionDuration={1000}
         />
         </div>
        <div className="imageHolder">
        </div>
        <div className="mainBody text-center">
          <button className="addNewActivityBtn">
            <Link to={{ pathname: "/addnewactivity", onSubmit: this.formSubmitEvent }}>Add New Activity</Link></button>
            <br/>
          {activityComponents}
        </div>
      </div>
    );
  }
}

export default Activity;
