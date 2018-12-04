import React from "react";
import singleActivityRequest from "../../firebaseRequests/activity";

import "./ActivityLineItem.css";

class ActivityLineItem extends React.Component {
  state = {
    activity: [],
    Time: "Time",
    Address: "Address",
    ActivityType: "ActivityType",
    Theme: "Theme",
    What: "What"
  };

  componentDidMount() {
    const firebaseId = this.props.match.params.id;
    singleActivityRequest
      .getSingleActivityRequest(firebaseId)
      .then(activity => {
        this.setState({ activity });
      })
      .catch(err => {
        console.error("error with get single request", err);
      });
  }
  render() {
    const { activity, Time, Address, ActivityType, Theme, What } = this.state;
    const url = `${activity.activityUrl}`;

    return (
      <div className="ActivityLineItem col-md-6 col-md-offset-3">
        <img
          className="lineItemImage"
          src={activity.imgUrl}
          alt={activity.imgUrl}
        />
        <h1 className="activityName">{activity.name}</h1>
        <div className="lineItemDescription">
          <p className="time">
            <span className="tag">{Time}</span> - {activity.time}
          </p>
          <p className="address">
            <span className="tag">{Address}</span> - {activity.address}
          </p>
          <p className="type">
            {" "}
            <span className="tag">{ActivityType}</span> - {activity.type}
          </p>
          <p className="theme">
            <span className="tag">{Theme}</span> - {activity.theme}
          </p>
          <p className="description">
            <span className="tag">{What}</span> - {activity.description}
          </p>
          <a href={url}>{url}</a>
        </div>
      </div>
    );
  }
}

export default ActivityLineItem;
