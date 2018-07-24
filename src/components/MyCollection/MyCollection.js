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
    // const firebaseId = this.recomDetails.id;
    // const {updatedComponent} = this.props.updatedComponent;
    myCollectionRequests
      .deleteMyCollection(firebaseId)
      .then(() => { 
        this.updateComp();
      })
      .catch(((err) => {
        console.error('error with delete request', err)
      }));
  };

  render () {
    const myCollectionComponent = this.state.myCollections.map((myCollection) => {
      return (
      <div>
      <SingleActivity
       key={myCollection.id} 
       details={myCollection} saved
       onClick={this.deleteMyCollectionClick}
      />
      </div>
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