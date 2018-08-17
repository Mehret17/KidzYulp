import React from 'react';

import myCollectionRequests from '../../firebaseRequests/mycollection';
import authRequests from '../../firebaseRequests/auth';
import SingleActivity from '../SingleActivity/SingleActivity';
import './MyCollection.css';

class MyCollection extends React.Component {
  state = {
    myCollections:[],

  }

  updateComp = () => {
    myCollectionRequests
    .getRequest(authRequests.getUid())
    .then((myCollections) => {
      this.setState({myCollections});
    })
    .catch((err) => {
      console.error('error with mycollection  get request', err);
    });
  }

   componentDidMount () {
     this.updateComp();
   };

   deleteMyCollectionClick = (firebaseId) => {
    myCollectionRequests
      .deleteMyCollection(firebaseId)
      .then(() => { 
        this.updateComp();
      })
      .catch(((err) => {
        console.error('error with delete request', err)
      }));
  };

  updateMyCollectionClick = (firebaseId, comment) => {
    const myActivity = this.state.myCollections.find(x => x.id===firebaseId)
    myActivity.comment = comment.text
    myCollectionRequests
      .putRequest(firebaseId, myActivity)
      .then(() => {
        this.updateComp();
      })
      .catch((err) => {
        console.error('error with put request', err)
      });
  };

  render () {
    const myCollectionComponent = this.state.myCollections.map((myCollection) => {
      return (
      <SingleActivity
       key={myCollection.id} 
       details={myCollection} saved
       onClick={this.deleteMyCollectionClick}
       onSubmit= {this.updateMyCollectionClick}
      />
      )
    })
    return (
      <div className="MyCollection">
      {/* <h1>MyCollection</h1> */}
      {myCollectionComponent}
      </div>
    );
  }
}

export default MyCollection;