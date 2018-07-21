import React from 'react';

import myCollectionRequests from '../../firebaseRequests/mycollection';
import authRequests from '../../firebaseRequests/auth';
import './MyCollection.css';

class MyCollection extends React.Component {
  state = {
    myCollections:[],
  }

   componentDidMount () {
     myCollectionRequests
      .getRequest(authRequests.getUid())
      .then((myCollections) => {
        this.setState({myCollections});
      })
      .catch((err) => {
        console.error('error with mycollection  get request', err);
      });
   }

  render () {
    const myCollectionComponent = this.state.myCollections.map((myCollection) => {
      return (
      <span>
      {myCollection.id}
      {myCollection.name}
      </span>
      )
    })
    return (
      <div className="MyCollection">
      <h1>MyCollection</h1>
      {myCollectionComponent}
      </div>
    );
  }
}

export default MyCollection;