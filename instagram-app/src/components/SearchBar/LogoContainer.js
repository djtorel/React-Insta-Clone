import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: `
  flex items-center
  mr-3 m:m-0
  md:w-1/6
  `,
})``;

const CameraIcon = styled.a.attrs({
  className: `
    jam jam-camera-alt text-gray-400
    text-4xl
  `,
})``;

const Divider = styled.div.attrs({
  className: `
    border-l border-gray-400
    ml-3 mr-3 xl:ml-5 xl:mr-5
    h-8 md:h-10
  `,
})``;

const Company = styled.div.attrs({
  className: `
    text-gray-400
    md:text-xl lg:text-2xl
  `,
})`
  font-family: Pacifico;
`;

const LogoContainer = ({ windowWidth }) => {
  return (
    <Container>
      <CameraIcon href="#" />
      {windowWidth > 640
        ? [<Divider key="divider" />, <Company key="name">Vanigram</Company>]
        : ''}
    </Container>
  );
};

LogoContainer.propTypes = {
  windowWidth: PropTypes.number,
};

export default LogoContainer;
