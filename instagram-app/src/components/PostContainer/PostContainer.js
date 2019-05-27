import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({
  post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments },
}) => (
  <div>
    <div>
      <div>Author Picture</div>
      <div>Author Name</div>
    </div>
    <div>Picture</div>
    <div>
      <div>Heart</div>
      <div>Quote Bubble</div>
    </div>
    <div>
      <div>Number of Likes</div>
      <div>likes</div>
    </div>
    <CommentSection comments={comments} />
  </div>
);

export default PostContainer;

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
  }),
};
