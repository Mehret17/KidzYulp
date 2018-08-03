import React from 'react';
import singleActivityRequest from '../../firebaseRequests/mycollection';
import {EmailShareButton} from 'react-share';

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
    const title = 'Test';
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
    body="http://github.com"
    className="shareButton">
    </EmailShareButton>
    </div>
   );
  }
}
 
export default OneActivity;
