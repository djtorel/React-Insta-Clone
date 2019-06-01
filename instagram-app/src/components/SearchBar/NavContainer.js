import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: `flex justify-end items-center md:w-1/6`,
})``;

const Compass = styled.a.attrs({
  className: `
    jam jam-compass text-gray-400 hover:text-gray-200
    ml-3
    text-2xl xl:text-3xl
  `,
})``;

const Heart = styled.a.attrs({
  className: `
    jam jam-heart text-gray-400 hover:text-gray-200
    ml-2 mr-2 md:ml-5 md:mr-5
    text-2xl xl:text-3xl
  `,
})``;

const User = styled.a.attrs({
  className: `
    jam jam-user text-gray-400 hover:text-gray-200
    text-2xl xl:text-3xl
  `,
})``;

const NavContainer = () => (
  <Container>
    <Compass href="#" />
    <Heart href="#" />
    <User href="#" />
  </Container>
);

export default NavContainer;
