import React from "react";
import {
  Form,
  ControlLabel,
  Col,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
import authRequests from "../../firebaseRequests/auth";

import "./AddNewActivity.css";

const defaultActivity = {
  name: "",
  imgUrl: "",
  activityUrl: "",
  time: "",
  address: "",
  type: "",
  theme: "",
  description: ""
};

class AddNewActivity extends React.Component {
  state = {
    newActivity: this.props.activity || defaultActivity
  };

  formFieldStringState = (name, e) => {
    const tempActivity = { ...this.state.newActivity };
    tempActivity[name] = e.target.value;
    this.setState({ newActivity: tempActivity });
  };

  nameChange = e => {
    this.formFieldStringState("name", e);
  };

  imageChange = e => {
    this.formFieldStringState("imgUrl", e);
  };

  activityChange = e => {
    this.formFieldStringState("activityUrl", e);
  };

  timeChange = e => {
    this.formFieldStringState("time", e);
  };

  addressChange = e => {
    this.formFieldStringState("address", e);
  };

  typeChange = e => {
    this.formFieldStringState("type", e);
  };

  themeChange = e => {
    this.formFieldStringState("theme", e);
  };

  descriptionChange = e => {
    this.formFieldStringState("description", e);
  };

  formSubmit = e => {
    const { onSubmit } = this.props.location;
    const { newActivity } = this.state;
    newActivity.uid = authRequests.getUid();
    this.setState({ newActivity });
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
      this.setState({ newActivity: defaultActivity });
      this.props.history && this.props.history.push("/activity");
    } else {
      alert("please fill in all the input");
    }
  };

  render() {
    const { newActivity } = this.state;

    return (
    // <div>
    // <form onSubmit={this.formSubmit}>
      <div className="AddNewActivity">
        <h3 className="recommendationHeader"> Create Activity </h3>
          <Form horizontal onSubmit={this.formSubmit}>
          {/* <form onSubmit={this.formSubmit}> */}
            <FormGroup controlId="name">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={8}>
                <FormControl
                  type="text"
                  // id="name"
                  placeholder="Activity Name"
                  value={newActivity.name}
                  onChange={this.nameChange}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="imgUrl">
              <Col componentClass={ControlLabel} sm={2}>
                Image Url
              </Col>
              <Col sm={8}>
                <FormControl
                  type="text"
                  // id="image"
                  placeholder="www.addnewactivity.png"
                  value={newActivity.image}
                  onChange={this.imageChange}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="activityUrl">
              <Col componentClass={ControlLabel} sm={2}>
                Activity Url
              </Col>
              <Col sm={8}>
                <FormControl
                  type="text"
                  // id="activity"
                  placeholder="www.addnewactivity.com"
                  value={newActivity.activity}
                  onChange={this.activityChange}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="time">
              <Col componentClass={ControlLabel} sm={2}>
                Time
              </Col>
              <Col sm={8}>
                <FormControl
                  type="text"
                  // id="time"
                  placeholder="3:00 PM - 5:00 PM"
                  value={newActivity.time}
                  onChange={this.timeChange}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="address">
              <Col componentClass={ControlLabel} sm={2}>
                Where
              </Col>
              <Col sm={8}>
                <FormControl
                  type="text"
                  id="address"
                  placeholder="500 Interstate Blvd"
                  value={newActivity.address}
                  onChange={this.addressChange}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="type">
              <Col componentClass={ControlLabel} sm={2}>
                Type
              </Col>
              <Col sm={8}>
                <FormControl
                  type="text"
                  // id="type"
                  placeholder="Play Date"
                  value={newActivity.type}
                  onChange={this.typeChange}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="theme">
              <Col componentClass={ControlLabel} sm={2}>
                Theme
              </Col>
              <Col sm={8}>
                <FormControl
                  type="text"
                  // id="theme"
                  placeholder="Art"
                  value={newActivity.theme}
                  onChange={this.themeChange}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="description">
              <Col componentClass={ControlLabel} sm={2}>
              {/* <ControlLabel>Textarea</ControlLabel> */}
                Description
              </Col>
              <Col className="textHolder" sm={8}>
                <FormControl
                  componentClass="textarea"
                  // id="description"
                  placeholder="Fun"
                  value={newActivity.description}
                  onChange={this.descriptionChange}
                />
              </Col>
            </FormGroup>
            {/* <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup> */}

            <FormGroup>
            <Col smOffset={2} sm={10}>
            <Button className="recommendationButton" type="submit">Submit</Button>
            </Col>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddNewActivity;
