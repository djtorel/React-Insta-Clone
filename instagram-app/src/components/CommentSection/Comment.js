import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div.attrs({
  className: `bg-gray-200 mb-2 p-2 rounded shadow-md`,
})``;

const UserName = styled.span.attrs({
  className: `text-gray-800`,
})`
  font-family: Roboto;
  font-weight: 500;
`;

const CommentText = styled.span.attrs({
  className: `text-gray-700`,
})`
  font-family: Roboto;
`;

const Comment = ({ username, text }) => (
  <Container>
    <UserName>{username}</UserName>
    <CommentText> {text}</CommentText>
  </Container>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
