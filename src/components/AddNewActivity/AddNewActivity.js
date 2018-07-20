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
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    e.preventDefault();
    onSubmit(this.state.newActivity)
  }

  render() {
    const {newActivity} = this.state;

    return (
      <div className="AddNewActivity">
        <h2>Add New Activity</h2>
        <form onSubmit={this.formSubmit}>
          <div className="col-md-6 col-md-offset-3">
            <div className="row">
              <fieldSet className="form">
                <label htmlFor="Name">Name:</label>
                <input className="col-xs-12"
                  type="text"
                  id="name"
                  placeholder="Activity Name"
                  value={newActivity.name}
                  onChange={this.nameChange}
                />
              </fieldSet>
            </div>
          </div>
          </form>
          </div>
        );
      }
    }
    
    export default AddNewActivity;
