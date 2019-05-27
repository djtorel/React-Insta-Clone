import React from 'react';
import styled from 'styled-components';

import LogoContainer from './LogoContainer';
import SearchInput from './SearchInput';
import NavContainer from './NavContainer';

const Header = styled.header.attrs({
  className: `flex justify-between items-center p-5 mt-1 bg-gray-800 h-20`,
})``;

const SearchBar = props => (
  <Header>
    <LogoContainer />
    <div />
    <SearchInput />
    <NavContainer />
  </Header>
);

export default SearchBar;
