import React from "react";
import {Link} from 'react-router-dom';
import StarRating from "react-star-rating-component";
import {} from "react-share";


import "./SingleActivity.css";

class SingleActivity extends React.Component {
  state = {
    isClicked: false,
    comment: {
      text: ""
    },
    rating: 0
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  textFieldStringState = e => {
    const tempActivity = { ...this.state.comment };
    tempActivity.text = e.target.value;
    this.setState({ comment: tempActivity });
  };

  render() {
    const { comment, rating } = this.state;
    const { saved, details} = this.props;
    const addCollection = e => {
      this.props.saveActivity(this.props.details);
    };

    const showForm = e => {
      this.setState({ isClicked: !this.state.isClicked });
    };

    const deleteCollection = e => {
      this.props.onClick(this.props.details.id);
    };

    const updatedCollection = () => {
      this.props.onSubmit(this.props.details.id, this.state.comment);
    };

    return (
      <div className="ActivityCard">
        <div className="col-xs-6 col-md-3">
          <div className="thumbnail">
          <img className="activityImage" src={details.imgUrl} alt={details.imgUrl} />
        <div className="SingleActivity">
        {
          saved ? (<p><Link className="title" to={'/oneactivity/' + details.id}>{details.name}</Link></p>) 
          :
        (<p><Link className="title" to={'/activitylineitem/' + details.id}>{details.name}</Link></p> )
        }
          <p className="time">{details.time}</p>
          <p className="address">{details.address}</p>
          <p className="type">{details.type}</p>
          <p className="theme">{details.theme}</p>
          {/* <p className="description">{details.description}</p> */}
          <a className="activityUrl">{details.activityUrl}</a>

          {comment ? <p className="comment">{details.comment}</p> : null}
         
    
          {saved ? (
            <div className="text-center">
              <button className="btn btn-primary" onClick={showForm}>
                Update
              </button>
              <button className="btn btn-danger" onClick={deleteCollection}>
                Delete
              </button>
            </div>
          ) : (
            <div className="starRating">
              <StarRating
                name="rate"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
              <button className="btn btn-default btn-sm glyphicon glyphicon-bookmark pull-right" onClick={addCollection}>
          
              </button>
            </div>
          )}
          {this.state.isClicked ? (
            <div className="row">
              <fieldset>
                <textarea
                  className="col-xs-12"
                  type="text"
                  id="name"
                  placeholder="Note"
                  value={comment.text}
                  onChange={this.textFieldStringState}
                />
                <button className="update" onClick={updatedCollection}>
                  Submit
                </button>
                <button className="Cancel" onClick={showForm}>
                  X
                </button>
              </fieldset>
            </div>
          ) : null}
          </div>
        </div>
        </div>
     </div>
    );
  }
}

export default SingleActivity;
