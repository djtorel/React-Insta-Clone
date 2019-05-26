import React from 'react';
import styled from 'styled-components';

const Header = styled.header.attrs({
  className: `flex justify-between`,
})``;

const SearchBar = props => (
  <Header>
    <div>
      <div>Logo</div>
      <div>Company Name</div>
    </div>
    <div>
      <input name="" type="text" value="" />
    </div>
    <div>
      <div>Compass</div>
      <div>Heart</div>
      <div>Profile Icon</div>
    </div>
  </Header>
);

export default SearchBar;
