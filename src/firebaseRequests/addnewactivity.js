import axios from 'axios';
import constants from '../constants';

const getNewActivity = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/newActivities.json`)
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

const postNewActivity = (listing) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/newActivities.json`, listing)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {getNewActivity, postNewActivity}
