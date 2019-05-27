import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: `flex justify-end items-center w-1/3`,
})``;

const Compass = styled.a.attrs({
  className: `
    jam jam-compass text-gray-400 hover:text-gray-200
    xl:text-3xl lg:text-2xl md:text-xl
  `,
})``;

const Heart = styled.a.attrs({
  className: `
    jam jam-heart text-gray-400 hover:text-gray-200 ml-6 mr-6
    xl:text-3xl lg:text-2xl md:text-xl
  `,
})``;

const User = styled.a.attrs({
  className: `
    jam jam-user text-gray-400 hover:text-gray-200
    xl:text-3xl lg:text-2xl md:text-xl
  `,
})``;

const NavContainer = props => (
  <Container>
    <Compass href="#" />
    <Heart href="#" />
    <User href="#" />
  </Container>
);

export default NavContainer;
