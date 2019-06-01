import React from 'react';
import styled from 'styled-components';

import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import LoginPage from './components/Login/LoginPage';

const Main = styled.main.attrs({
  className: `flex flex-col min-h-screen items-center bg-gray-500`,
})``;

const App = () => {
  return (
    <Main>
      <ComponentFromWithAuthenticate />
    </Main>
  );
};

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
