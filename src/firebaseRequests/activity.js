import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/activities.json`)
      .then(res => {
        const activities = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            activities.push(res.data[fbKey]);
          });
        }
        resolve(activities);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getRequest};