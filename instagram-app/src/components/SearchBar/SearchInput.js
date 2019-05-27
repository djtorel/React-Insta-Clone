import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: ``,
})`
  position: relative;
  padding: 0;
  margin: 0;
`;

const SearchIcon = styled.span.attrs({
  className: `jam jam-search text-gray-400`,
})`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  opacity: 0.8;
`;

const Input = styled.input.attrs({
  className: `rounded h-10 pl-10 bg-gray-600 shadow-inner`,
})`
  ::placeholder {
    color: #cbd5e0;
    opacity: 0.8;
  }
`;

const SearchInput = props => (
  <Container>
    <SearchIcon />
    <Input name="" placeholder="Search" type="text" value="" />
  </Container>
);

export default SearchInput;
