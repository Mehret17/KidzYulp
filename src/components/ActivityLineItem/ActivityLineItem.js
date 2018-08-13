import React from 'react';
import singleActivityRequest from '../../firebaseRequests/activity';


import "./ActivityLineItem.css";


class ActivityLineItem extends React.Component {
  state ={
    activity :[]
    }
  componentDidMount () {
    const firebaseId = this.props.match.params.id;
    singleActivityRequest
      .getSingleActivityRequest(firebaseId)
      .then(activity => {
        this.setState({activity})
      })
      .catch((err) => {
        console.error('error with get single request', err)
      })
  }
  render() { 
    const {activity} = this.state;
   
    return (   
    <div className="ActivityLineItem">
      <h1>{activity.name}</h1>
      <p className="time">{activity.time}</p>
          <p className="address">{activity.address}</p>
          <p className="type">{activity.type}</p>
          <p className="theme">{activity.theme}</p>
          <p className="description">{activity.description}</p>
    {/* <EmailShareButton
    url={shareUrl}
    subject={title}
    body="http://localhost:3000/oneactivity/-LInCfOF4LyOoDXgU_MI"
    className="shareButton">
    <EmailIcon
      size={32}
      round />
    </EmailShareButton> */}
    </div>
   );
  }
}
 
export default ActivityLineItem;
