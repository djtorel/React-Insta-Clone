import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const Container = styled.div.attrs({
  className: `bg-gray-600 shadow-md mb-5 rounded p-2`,
})``;

const PostHeader = styled.section.attrs({
  className: `bg-gray-400 rounded shadow-md mb-2`,
})``;

const AuthorSection = styled.div.attrs({
  className: `flex items-center p-4`,
})``;

const AuthorImg = styled.img.attrs({
  className: `h-10 rounded-full`,
})``;

const AuthorName = styled.span.attrs({
  className: 'ml-3 text-lg',
})`
  font-family: Roboto;
  font-weight: 500;
`;

const PostImg = styled.img.attrs({
  className: `w-full`,
})``;

const LikesSection = styled.div.attrs({
  className: 'px-4 py-2',
})``;

const IconContainer = styled.div.attrs({
  className: `flex items-center text-3xl mb-2`,
})``;

const Heart = styled.div.attrs({
  className: `mr-3 jam `,
})`
  cursor: pointer;
  ${({ liked, className }) =>
    liked ? (className = `${className} jam-heart-f`) : `${className} jam-heart`}
`;

const MessageBubble = styled.div.attrs({
  className: `jam jam-message-alt`,
})`
  cursor: pointer;
`;

const LikesContainer = styled.div.attrs({
  className: `flex text-sm`,
})`
  font-family: Roboto;
  font-weight: 500;
`;

const PostContainer = ({
  post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments },
}) => {
  const [likeNumber, setLikeNumber] = useState(likes);
  const [liked, setLiked] = useState(false);

  const handleLikes = () => {
    liked ? setLikeNumber(likeNumber - 1) : setLikeNumber(likeNumber + 1);
    setLiked(!liked);
  };
  return (
    <Container>
      <PostHeader>
        <AuthorSection>
          <AuthorImg src={thumbnailUrl} alt="" />
          <AuthorName>{username}</AuthorName>
        </AuthorSection>
        <PostImg src={imageUrl} alt="" />
        <LikesSection>
          <IconContainer>
            <Heart
              onClick={handleLikes}
              liked={liked}
              className={liked ? `jam-heart-f text-red-800` : `jam-heart`}
            />
            <MessageBubble />
          </IconContainer>
          <LikesContainer>{likeNumber} likes</LikesContainer>
        </LikesSection>
      </PostHeader>
      <CommentSection comments={comments} timestamp={timestamp} />
    </Container>
  );
};

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
