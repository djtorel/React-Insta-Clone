import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const Heart = styled.div.attrs({
  className: `jam jam-heart`,
})``;

const MessageBubble = styled.div.attrs({
  className: `jam jam-message-alt`,
})``;

const PostContainer = ({
  post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments },
}) => (
  <div>
    <div>
      <img src={thumbnailUrl} alt="" />
      <div>{username}</div>
    </div>
    <img src={imageUrl} alt="" />
    <div>
      <Heart />
      <MessageBubble />
    </div>
    <div>
      <div>{likes}</div>
      <div>likes</div>
    </div>
    <CommentSection comments={comments} timestamp={timestamp} />
  </div>
);

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

export default PostContainer;
