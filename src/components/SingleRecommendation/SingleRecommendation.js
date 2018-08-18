import React from 'react';
import ReactModal from 'react-modal';


import './SingleRecommendation.css';
import AddNewActivity from '../AddNewActivity/AddNewActivity';

class SingleRecommendation extends React.Component {
  state = {
    isEditing: false,
  }

  render() {
    const { recomDetails } = this.props;


    const edit = (firebaseId) => {
      this.setState({ isEditing: true, firebaseId });
    };

    const deleteActivity = () => {
      this.props.onClick(this.props.recomDetails.id)
    };

    const updateActivity = (updatedActivity) => {
      this.props.onSubmit(updatedActivity)
        .then(() => {
          this.setState({ isEditing: false })
        })
        .catch((err) => {
          console.error('error with put request', err)
        });
    };


    return (
      <div className="singleRecommendation col-sm-6 col-sm-offset-3">
        <div className="col-sm-3">
            <img className="recommImage" src={recomDetails.imgUrl} alt={recomDetails.imgUrl} />
        </div>
        <div className="col-sm-3">
            <h3 className="name">{recomDetails.name}</h3>
            <p className="time">Time: {recomDetails.time}</p>
            <p className="address">Address: {recomDetails.address}</p>
            <p className="type">Type: {recomDetails.type}</p>
            <p className="theme">Theme: {recomDetails.theme}</p>
            <p className="description">{recomDetails.description}</p>
            <button className="btn btn-default btn-sm glyphicon glyphicon-pencil" onClick={edit}></button>
            <button className="btn btn-default btn-sm glyphicon glyphicon-trash pull-right" onClick={deleteActivity}></button>

            {
              this.state.isEditing ? (
                <ReactModal isOpen={this.state.isEditing} appElement={document.body}>
                  <AddNewActivity
                    activity={recomDetails}
                    // onSubmit={this.updateRecommendationClick} />
                    location={{ onSubmit: updateActivity }} />
                </ReactModal>
              ) : null
            }
          </div>
        </div>
    );
  }
}

export default SingleRecommendation;
