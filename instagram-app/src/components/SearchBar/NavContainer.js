import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: `flex justify-between items-center w-48`,
})``;

const Compass = styled.a.attrs({
  className: `jam jam-compass text-gray-400 text-3xl hover:text-gray-200`,
})``;

const Heart = styled.a.attrs({
  className: `jam jam-heart text-gray-400 text-3xl hover:text-gray-200`,
})``;

const User = styled.a.attrs({
  className: `jam jam-user text-gray-400 text-3xl hover:text-gray-200`,
})``;

const NavContainer = props => (
  <Container>
    <Compass href="#" />
    <Heart href="#" />
    <User href="#" />
  </Container>
);

export default NavContainer;
