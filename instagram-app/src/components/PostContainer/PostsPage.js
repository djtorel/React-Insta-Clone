import React, { Component } from 'react';
import styled from 'styled-components';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

const MainContainer = styled.div.attrs({
  className: `w-full md:w-11/12 lg:w-4/5 xl:w-3/5`,
})``;

const ContentContainer = styled.div.attrs({
  className: `mt-5 mx-1 md:mx-0`,
})``;

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchTerm: '',
      filteredPosts: [],
      likedPosts: [],
    };
  }

  componentDidMount() {
    !localStorage.posts &&
      localStorage.setItem('posts', JSON.stringify(dummyData));
    !localStorage.likedPosts && localStorage.setItem('likedPosts', '[]');

    this.setState({ posts: JSON.parse(localStorage.posts) });
    this.setState({ likedPosts: JSON.parse(localStorage.likedPosts) });
  }

  componentDidUpdate(prevProps, { searchTerm }) {
    searchTerm !== this.state.searchTerm &&
      this.setState({
        filteredPosts: this.state.posts.filter(post =>
          post.username
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase()),
        ),
      });

    JSON.stringify(this.state.posts) !== localStorage.posts &&
      localStorage.setItem('posts', JSON.stringify(this.state.posts));

    JSON.stringify(this.state.likedPosts) !== localStorage.likedPosts &&
      localStorage.setItem('likedPosts', JSON.stringify(this.state.likedPosts));
  }

  setSearch = searchTerm => this.setState({ searchTerm });
  useSearch = () => [this.state.searchTerm, this.setSearch];

  setComments = postId => comments =>
    this.setState({
      posts: this.state.posts.map(post =>
        post.id === postId ? { ...post, comments } : post,
      ),
    });
  findComments = postId =>
    this.state.posts.filter(post => post.id === postId)[0].comments;
  useComments = postId => [this.findComments(postId), this.setComments(postId)];

  setLikedPosts = value => this.setState({ likedPosts: value });
  useLikedPosts = () => [this.state.likedPosts, this.setLikedPosts];

  render() {
    const {
      state: { posts, searchTerm, filteredPosts },
      useSearch,
      useComments,
      useLikedPosts,
    } = this;
    return (
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
              useLikedPosts={useLikedPosts}
            />
          ))}
        </ContentContainer>
      </MainContainer>
    );
  }
}

export default PostsPage;
