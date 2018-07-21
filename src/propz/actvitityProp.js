import PropTypes from 'prop-types';

const activityShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  activityUrl: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,  theme: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export {activityShape};
