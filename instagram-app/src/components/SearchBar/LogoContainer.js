import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: `flex items-center w-1/3`,
})``;

const CameraIcon = styled.a.attrs({
  className: `jam jam-camera-alt text-gray-400 xl:text-4xl lg:text-3xl md:text-xl`,
})``;

const Divider = styled.div.attrs({
  className: `border-l border-gray-400 xl:h-10 md:h-8 ml-4 mr-4`,
})``;

const Company = styled.div.attrs({
  className: `xl:text-3xl lg:text-2xl md:text-xl text-gray-400`,
})`
  @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
  font-family: Pacifico;
`;

const LogoContainer = props => (
  <Container>
    <CameraIcon href="#" />
    <Divider />
    <Company>Vanigram</Company>
  </Container>
);

export default LogoContainer;
