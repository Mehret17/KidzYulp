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

const getNewActivities = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/newActivities.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const newActivities = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            newActivities.push(res.data[fbKey]);
          });
        }
        resolve(newActivities);
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

const deleteNewActivity = (newActivityId) => {
  return new Promise ((resolve, reject) => {
    axios
     .delete (`${constants.firebaseConfig.databaseURL}/newActivities/${newActivityId}.json`)
     .then((res) => {
       resolve(res);
     })
     .catch((err) => {
       reject(err);
     });
  });
};


const updateRecommendation = (activityId, newActivityObj) => {
  return new Promise ((resolve, reject) => {
    axios
     .put (`${constants.firebaseConfig.databaseURL}/newActivities/${activityId}.json`, newActivityObj)
     .then((res) => {
       resolve(res);
     })
     .catch((err) => {
       reject(err);
     });
  });
};


const getSingleNewActivityRequest = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/newActivities/${id}.json`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getNewActivity, postNewActivity, getNewActivities, deleteNewActivity, updateRecommendation, getSingleNewActivityRequest}
