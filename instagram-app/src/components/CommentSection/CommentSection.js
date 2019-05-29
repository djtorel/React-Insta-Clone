import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './CommentSection.css';
import Comment from './Comment';

const Container = styled.section.attrs({
  className: `flex flex-col bg-gray-400 p-2 rounded shadow-md`,
})``;

const CommentsContainer = styled.div.attrs({
  className: ``,
})``;

const TimeStamp = styled.div.attrs({
  className: `ml-2 mt-1 text-gray-600 text-sm`,
})`
  font-family: Roboto;
  font-weight: 500;
  opacity: 0.8;
`;

const Divider = styled.div.attrs({
  className: `w-4/5 self-center bg-gray-500 my-3`,
})`
  height: 1px;
  opacity: 0.6;
`;

const InputContainer = styled.div.attrs({
  className: `flex justify-between items-center`,
})``;

const CommentInput = styled.input.attrs({
  className: `appearance-none w-full bg-gray-200 h-full pl-3 rounded-l`,
})`
  ::placeholder {
    color: #97266d;
  }
`;

const MessageButton = styled.button.attrs({
  className: `
    jam jam-message-writing text-2xl p-2 text-gray-200 bg-gray-600 rounded-r
  `,
})``;

const CommentSection = ({ comments, timestamp }) => {
  const [inputText, setInputText] = useState('');

  return (
    <Container>
      <CommentsContainer>
        {comments.map(({ username, text }, i) => (
          <Comment key={i} username={username} text={text} />
        ))}
      </CommentsContainer>
      <TimeStamp>{timestamp}</TimeStamp>
      <Divider />
      <InputContainer>
        <CommentInput
          name="comment"
          value={inputText}
          type="text"
          placeholder="Add a comment..."
          onChange={e => setInputText(e.target.value)}
        />
        <MessageButton />
      </InputContainer>
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
