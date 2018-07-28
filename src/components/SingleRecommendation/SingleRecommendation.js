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
            <button className="btn btn-primary" onClick={edit}>Edit</button>
            <button className="btn btn-danger" onClick={deleteActivity}>Delete</button>

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
      </div>
    );
  }
}

export default SingleRecommendation;
