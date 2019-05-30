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

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchHandler = searchTerm =>
    this.setState({
      filteredPosts: this.state.posts.filter(post =>
        post.username.includes(searchTerm),
      ),
    });
  setSearch = value => this.setState({ searchTerm: value });
  useSearch = () => [this.state.searchTerm, this.setSearch, this.searchHandler];

  setComments = ({ postId, comment }) =>
    this.setState({
      posts: this.state.posts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post,
      ),
    });
  findComments = ({ postId }) =>
    this.state.posts.filter(post => post.id === postId)[0].comments;
  useComments = ({ postId }) => [
    this.findComments({ postId }),
    this.setComments,
  ];

  render() {
    const {
      state: { posts, searchTerm, filteredPosts },
      useSearch,
      useComments,
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
              <PostContainer
                post={post}
                key={post.id}
                id={post.id}
                useComments={useComments}
              />
            ))}
          </ContentContainer>
        </MainContainer>
      </Main>
    );
  }
}

export default App;
