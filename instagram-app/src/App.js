import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: data,
    };
  }

  renderPosts = posts => posts.map(post => <PostContainer posts={post} />);

  render() {
    const {
      state: { posts },
      renderPosts,
    } = this;
    return (
      <div>
        <SearchBar />
        {renderPosts(posts)}
      </div>
    );
  }
}

export default App;
