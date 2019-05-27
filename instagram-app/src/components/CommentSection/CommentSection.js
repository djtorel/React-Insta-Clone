import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './CommentSection.css';
import Comment from './Comment';

const Container = styled.section.attrs({
  className: `bg-gray-400 p-2 rounded shadow-md`,
})``;

const CommentsContainer = styled.div.attrs({
  className: `flex flex-col`,
})``;

const CommentDivider = styled.div.attrs({
  className: `w-4/5 border-b border-gray-500 self-center my-2`,
})`
  opacity: 0.6;
`;

const CommentSection = ({ comments, timestamp }) => {
  return (
    <Container>
      <CommentsContainer>
        {comments.map(({ username, text }, i) => (
          <Comment key={i} username={username} text={text} />
        ))}
        <CommentDivider />
      </CommentsContainer>
      <div>{timestamp}</div>
      <div>
        <input name="" value="" type="text" placeholder="Add a comment..." />
        <div>Comment Icon</div>
      </div>
    </Container>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  timestamp: PropTypes.string,
};

export default CommentSection;
