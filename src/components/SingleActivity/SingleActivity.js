import React from 'react';

import './SingleActivity.css';

class SingleActivity extends React.Component {
  state = {
    isClicked: false,
  }
  
  render() {
    const {saved, details } = this.props;
    const addCollection = (e) => {
      this.props.saveActivity(this.props.details)
    };

    const deleteCollection = (e) => {
      this.props.onClick(this.props.details.id)
    };

    const showForm = (e) => {
      this.setState({isClicked: !this.state.isClicked})
    };

    return (
      <div className="container">
        <div className="col-sm-3">
          <img src={details.imgUrl} alt={details.imgUrl}/>
          <div className="SingleActivity">
            <h3 className="name">{details.name}</h3>
            <p className="time">{details.time}</p>
            <p className="address">{details.address}</p>
            <p className="type">{details.type}</p>
            <p className="theme">{details.theme}</p>
            <p className="description">{details.description}</p>
          {
              saved ? (
                <div className="text-center">
                <button className="btn btn-primary"onClick={showForm}>Update</button>
                <button className="btn btn-danger"onClick={deleteCollection}>Delete</button>
                </div>
              ) : (
                <div className="text-center">
                <button className="btn btn-primary"onClick={addCollection}>Save</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SingleActivity;