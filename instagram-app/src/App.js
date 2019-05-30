import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

const Main = styled.main.attrs({
  className: `flex flex-col min-h-screen items-center bg-gray-500`,
})``;
const MainContainer = styled.div.attrs({
  className: `w-full md:w-11/12 lg:w-4/5 xl:w-3/5`,
})``;

const ContentContainer = styled.div.attrs({
  className: `mt-5 mx-1 md:mx-0`,
})``;

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchTerm: '',
      filteredPosts: [],
    };
  }

  searchHandler = searchTerm =>
    this.setState({
      filteredPosts: this.state.posts.filter(post =>
        post.username.includes(searchTerm),
      ),
    });
  setSearch = value => this.setState({ searchTerm: value });
  useSearch = () => [this.state.searchTerm, this.setSearch, this.searchHandler];

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    const {
      state: { posts, searchTerm, filteredPosts },
      useSearch,
    } = this;
    return (
      <Main>
        <MainContainer>
          <SearchBar useSearch={useSearch} />
          <ContentContainer>
            {(filteredPosts.length > 0 || searchTerm.length > 0
              ? filteredPosts
              : posts
            ).map(post => (
              <PostContainer post={post} key={post.id} />
            ))}
          </ContentContainer>
        </MainContainer>
      </Main>
    );
  }
}

export default App;
// MVP Day 2 Completed
