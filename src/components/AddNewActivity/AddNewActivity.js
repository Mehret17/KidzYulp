import React from 'react';

import './AddNewActivity.css';

const defaultActivity = {
  name: '',
  imgUrl: '',
  activityUrl: '',
  time: '',
  address: '',
  type: '',
  theme: '',
  description: '',
};


class AddNewActivity extends React.Component {
  state = {
    newActivity : defaultActivity
  };

  formFieldStringState = (name, e) => {
    const tempActivity = {...this.state.newActivity};
    tempActivity[name] = e.target.value;
    this.setState({newActivity: tempActivity});
  };

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  };

  imageChange = (e) => {
    this.formFieldStringState('imgUrl', e);
  };

  activityChange = (e) => {
    this.formFieldStringState('activityUrl', e);
  };

  timeChange = (e) => {
    this.formFieldStringState('time', e);
  };

  addressChange = (e) => {
    this.formFieldStringState('address', e);
  };

  typeChange = (e) => {
    this.formFieldStringState('type', e);
  };

  themeChange = (e) => {
    this.formFieldStringState('theme', e);
  };

  descriptionChange = (e) => {
    this.formFieldStringState('description', e);
  };

  
  formSubmit = (e) => {
    const {onSubmit} = this.props.location;
    const {newActivity} = this.state;
    e.preventDefault();
    if (
      newActivity.name &&
      newActivity.imgUrl &&
      newActivity.activityUrl &&
      newActivity.time &&
      newActivity.address &&
      newActivity.type &&
      newActivity.theme &&
      newActivity.description
    ) {
      onSubmit(this.state.newActivity);
      this.setState({newActivity: defaultActivity});
      this.props.history.push('/activity');
    } else {
      alert ('please fill in all the input');

    }
  }

  render() {
    const {newActivity} = this.state;

    return (
      <div className="AddNewActivity">
        <h2>Add New Activity</h2>
        <form onSubmit={this.formSubmit}>
          <div className="col-md-6 col-md-offset-3">
            <div className="row">
              <fieldset>
                <label htmlFor="Name">Name:</label>
                <input className="col-xs-12"
                  type="text"
                  id="name"
                  placeholder="Activity Name"
                  value={newActivity.name}
                  onChange={this.nameChange}
                />
              </fieldset>
              </div>
              <div className="row">
              <fieldset className="form">
                <label htmlFor="Name">Image URL:</label>
                <input className="col-xs-12"
                  type="text"
                  id="image"
                  placeholder="www.addnewactivity.png"
                  value={newActivity.image}
                  onChange={this.imageChange}
                />
              </fieldset>
            </div>
            <div className="row">
              <fieldset className="form">
                <label htmlFor="Name">Activity URL:</label>
                <input className="col-xs-12"
                  type="text"
                  id="activity"
                  placeholder="www.addnewactivity.com"
                  value={newActivity.activity}
                  onChange={this.activityChange}
                />
              </fieldset>
            </div>
            <div className="row">
              <fieldset>
                <label htmlFor="time">Time:</label>
                <input className="col-xs-12"
                  type="text"
                  id="time"
                  placeholder="3:00 PM - 5:00 PM"
                  value={newActivity.time}
                  onChange={this.timeChange}
                />
              </fieldset>
            </div>
            <div className="row">
              <fieldset>
                <label htmlFor="time">Address:</label>
                <input className="col-xs-12"
                  type="text"
                  id="address"
                  placeholder="500 Interstate Blvd"
                  value={newActivity.address}
                  onChange={this.addressChange}
                />
              </fieldset>
            </div>
            <div className="row">
              <fieldset>
                <label htmlFor="type">Type:</label>
                <input className="col-xs-12"
                  type="text"
                  id="type"
                  placeholder="Play Date"
                  value={newActivity.type}
                  onChange={this.typeChange}
                />
              </fieldset>
            </div>
            <div className="row">
              <fieldset>
                <label htmlFor="theme">Theme:</label>
                <input className="col-xs-12"
                  type="text"
                  id="theme"
                  placeholder="500 Interstate Blvd"
                  value={newActivity.theme}
                  onChange={this.themeChange}
                />
              </fieldset>
            </div>
            <div className="row">
              <fieldset>
                <label htmlFor="time">Description:</label>
                <input className="col-xs-12"
                  type="text"
                  id="description"
                  placeholder="Fun"
                  value={newActivity.description}
                  onChange={this.descriptionChange}
                />
              </fieldset>
            </div>
            <br />
            <button className="btn btn-primary col-xs-6">Submit</button>
          </div>
          </form>
          </div>
        );
      }
    }
    
    export default AddNewActivity;
