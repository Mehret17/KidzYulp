import React from 'react';

import './SingleRecommendation.css';

class SingleRecommendation extends React.Component {
  render() {
    const { recomDetails } = this.props;
    return (
      <div className="singleRecommendation">
      <div className="container">
        <div className="col-sm-3">
          <img src={recomDetails.imgUrl} alt={recomDetails.imgUrl} />
            <h3 className="name">{recomDetails.name}</h3>
            <p className="time">{recomDetails.time}</p>
            <p className="address">{recomDetails.address}</p>
            <p className="type">{recomDetails.type}</p>
            <p className="theme">{recomDetails.theme}</p>
            <p className="description">{recomDetails.description}</p>
            <button className="btn-btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRecommendation;
