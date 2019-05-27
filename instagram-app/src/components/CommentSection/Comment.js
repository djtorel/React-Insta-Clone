import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ username, text }) => (
  <div>
    <div>{username}</div>
    <div>{text}</div>
  </div>
);

export default Comment;

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
