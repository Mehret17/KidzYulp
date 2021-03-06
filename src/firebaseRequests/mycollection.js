import axios from 'axios';
import constants from '../constants';

const postRequest = (myCollection) => {
  return new Promise((resolve, reject) => {
    axios
     .post(`${constants.firebaseConfig.databaseURL}/myCollection.json`, myCollection)
     .then((res) => {
       resolve(res);
     })
     .catch((err) => {
       reject(err);
     });
  });
};

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
     .get(`${constants.firebaseConfig.databaseURL}/myCollection.json?orderBy="uid"&equalTo="${uid}"`)
     .then(res => {
       const myCollections = [];
       if (res.data !==null) {
         Object.keys(res.data).forEach(fbKey => {
           res.data[fbKey].id = fbKey;
           myCollections.push(res.data[fbKey]);
         });
       }
       resolve(myCollections);
     })
     .catch((err) => {
       reject(err);
     });
  });
};

const deleteMyCollection = (activityId) => {
  return new Promise ((resolve, reject) => {
    axios
     .delete (`${constants.firebaseConfig.databaseURL}/myCollection/${activityId}.json`)
     .then((res) => {
       resolve(res);
     })
     .catch((err) => {
       reject(err);
     });
  });
};

const putRequest = (activityId, updatedCollection) => {
  return new Promise ((resolve, reject) => {
    axios
     .put (`${constants.firebaseConfig.databaseURL}/myCollection/${activityId}.json`, updatedCollection)
     .then((res) => {
       resolve(res);
     })
     .catch((err) => {
       reject(err);
     });
  });
};

const getSingleActivityRequest = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myCollection/${id}.json`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export default {postRequest, getRequest, deleteMyCollection, putRequest, getSingleActivityRequest}
