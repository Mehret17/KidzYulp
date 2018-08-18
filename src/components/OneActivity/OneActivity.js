import React from 'react';
import singleActivityRequest from '../../firebaseRequests/mycollection';
import {EmailShareButton, EmailIcon} from 'react-share';

import "./OneActivity.css";
// import mycollection from '../../firebaseRequests/mycollection';
// import SingleActivity from '../SingleActivity/SingleActivity';

class OneActivity extends React.Component {
  state ={
    myCollections :[],
    Time: 'Time',
    Address: 'Address',
    ActivityType: 'ActivityType',
    Theme: 'Theme',
    What:'What'
    }
  componentDidMount () {
    const firebaseId = this.props.match.params.id;
    singleActivityRequest
      .getSingleActivityRequest(firebaseId)
      .then(myCollections => {
        this.setState({myCollections})
      })
      .catch((err) => {
        console.error('error with get single request', err)
      })
  }
  render() { 
    const {myCollections, Time, Address, ActivityType, Theme, What} = this.state;
    const url = (`${myCollections.activityUrl}`);
    const shareUrl = 'http://github.com';
    const title = 'Activity';
    return (   
    <div className="OneActivity col-md-6 col-md-offset-3">
     <img className="oneActivityImage" src={myCollections.imgUrl} alt={myCollections.imgUrl} />
      <h1 className="oneActivityName">{myCollections.name}</h1>
      <div className="oneActivityDescription">
      <p className="time"><span className="tags">{Time}</span> - {myCollections.time}</p>
          <p className="address"><span className="tags">{Address}</span> - {myCollections.address}</p>
          <p className="type"> <span className="tags">{ActivityType}</span> - {myCollections.type}</p>
          <p className="theme"><span className="tags">{Theme}</span> - {myCollections.theme}</p>
          <p className="description"><span className="tags">{What}</span> - {myCollections.description}</p>
          <a href={url} >{url}</a>
      </div>
    <EmailShareButton
    url={shareUrl}
    subject={title}
    body="http://localhost:3000/activitylineitem/id"
    className="shareButton">
    <EmailIcon
      size={32}
      round />
    </EmailShareButton>
    </div>
   );
  }
}
 
export default OneActivity;
