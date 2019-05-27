import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: `w-full md:w-3/6`,
})`
  position: relative;
  padding: 0;
  margin: 0;
`;

const SearchIcon = styled.span.attrs({
  className: `jam jam-search text-gray-400`,
})`
  position: absolute;
  bottom: 14px;
  left: 10px;
  font-size: 20px;
  opacity: 0.8;
`;

const Input = styled.input.attrs({
  className: `
    rounded h-12 pl-10 bg-gray-600 shadow-inner w-full text-gray-400
  `,
})`
  ::placeholder {
    color: #cbd5e0;
    opacity: 0.8;
  }
`;

const SearchInput = props => {
  const [input, setInput] = useState('');
  const handleInput = e => setInput(e.target.value);
  return (
    <Container>
      <SearchIcon />
      <Input
        name="search"
        placeholder="Search"
        type="text"
        value={input}
        onChange={handleInput}
      />
    </Container>
  );
};

export default SearchInput;
