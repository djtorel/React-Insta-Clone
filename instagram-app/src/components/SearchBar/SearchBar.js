import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LogoContainer from './LogoContainer';
import SearchInput from './SearchInput';
import NavContainer from './NavContainer';

const Header = styled.header.attrs({
  className: `
    flex justify-between items-center bg-gray-800 h-20 shadow-md
    p-2 md:px-5 lg:px-10
  `,
})``;

const SearchBar = ({ useSearch }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowWidth = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);
  }, []);
  return (
    <Header>
      <LogoContainer windowWidth={windowWidth} />
      <SearchInput useSearch={useSearch} />
      <NavContainer />
    </Header>
  );
};

SearchBar.propTypes = {
  useSearch: PropTypes.func.isRequired,
};

export default SearchBar;
