import React from 'react';
import singleActivityRequest from '../../firebaseRequests/mycollection';
import {EmailShareButton, EmailIcon} from 'react-share';

import "./OneActivity.css";
// import SingleActivity from '../SingleActivity/SingleActivity';

class OneActivity extends React.Component {
  state ={
    myCollections :[]
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
    const {myCollections} = this.state;
    const shareUrl = 'http://github.com';
    const title = 'Activity';
    return (   
    <div className="OneActivity">
      <h1>{myCollections.name}</h1>
      <p className="time">{myCollections.time}</p>
          <p className="address">{myCollections.address}</p>
          <p className="type">{myCollections.type}</p>
          <p className="theme">{myCollections.theme}</p>
          <p className="description">{myCollections.description}</p>
    <EmailShareButton
    url={shareUrl}
    subject={title}
    body="http://localhost:3000/oneactivity/-LInCfOF4LyOoDXgU_MI"
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
