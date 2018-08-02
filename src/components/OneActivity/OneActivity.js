import React from 'react';
import singleActivityRequest from '../../firebaseRequests/mycollection';

import "./OneActivity.css";
import SingleActivity from '../SingleActivity/SingleActivity';

class OneActivity extends React.Component {
  state ={
    activity :{}
    }



  componentDidMount () {
    const firebaseId = this.props.match.params.id;
    singleActivityRequest
      .getSingleActivityRequest(firebaseId)
      .then((activity) => {
        this.setState({activity})
      })
      .catch((err) => {
        console.error('error with get single request', err)
      })
  }
  render() { 
    return (     
    <div className="One Activity">
      <SingleActivity
      />
    </div>
   );
  }
}
 
export default OneActivity;
