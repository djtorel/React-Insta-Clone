import React from 'react';
import styled from 'styled-components';

import './App.css';
import PostsPage from './components/PostContainer/PostsPage';

const Main = styled.main.attrs({
  className: `flex flex-col min-h-screen items-center bg-gray-500`,
})``;

const App = () => {
  return (
    <Main>
      <PostsPage />
    </Main>
  );
};

export default App;
