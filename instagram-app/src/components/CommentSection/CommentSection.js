import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';
import Comment from './Comment';

const CommentSection = ({ comments }) => {
  const renderComments = () =>
    comments.map(({ username, text }, i) => (
      <Comment key={i} username={username} text={text} />
    ));
  return (
    <div>
      {renderComments()}
      <div>time ago</div>
      <div>
        <input name="" value="" type="text" placeholder="Add a comment..." />
        <div>Comment Icon</div>
      </div>
    </div>
  );
};

export default CommentSection;

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};
