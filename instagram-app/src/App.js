import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

const Main = styled.main.attrs({
  className: `flex flex-col min-h-screen items-center bg-gray-500`,
})``;
const MainContainer = styled.div.attrs({
  className: `w-full md:w-11/12 lg:w-4/5 xl:w-3/5`,
})``;

const ContentContainer = styled.div.attrs({
  className: `my-4`,
})``;

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: data,
    };
  }

  render() {
    const {
      state: { posts },
    } = this;
    return (
      <Main>
        <MainContainer>
          <SearchBar />
          <ContentContainer>
            {posts.map((post, i) => (
              <PostContainer post={post} key={i} />
            ))}
          </ContentContainer>
        </MainContainer>
      </Main>
    );
  }
}

export default App;
