import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: `flex items-center`,
})``;

const CameraIcon = styled.a.attrs({
  className: `jam jam-camera-alt text-gray-400`,
})`
  font-size: 40px;
`;

const Divider = styled.div.attrs({
  className: `border-l border-gray-400 h-10 ml-4 mr-4`,
})``;

const Company = styled.div.attrs({
  className: `text-3xl text-gray-400`,
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
