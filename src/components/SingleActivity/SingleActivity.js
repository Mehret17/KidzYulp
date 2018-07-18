import React from 'react';

import './SingleActivity.css';

class SingleActivity extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <div className="container">
        <div className="col-sm-3">
          <img src={details.imgUrl} alt={details.imgUrl}/>
          <div className="SingleActivity">
            <h3 className="name">{details.activityName}</h3>
            <p className="time">{details.time}</p>
            <p className="address">{details.address}</p>
            <p className="type">{details.type}</p>
            <p className="theme">{details.theme}</p>
            <p className="description">{details.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleActivity;