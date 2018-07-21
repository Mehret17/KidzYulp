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
     .post(`${constants.firebaseConfig.databaseURL}/myCollection.json?orderBy="uid"&equalTo="${uid}"`)
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

export default {postRequest, getRequest}
