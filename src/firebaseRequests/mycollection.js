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

export default {postRequest}
