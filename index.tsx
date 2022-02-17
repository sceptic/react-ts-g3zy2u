import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Post } from './features/post/ui/Post/Post';
import { PostForm } from './features/post/ui/PostForm/PostForm';

interface AppProps {}
interface AppState {
  name: string;
  page: 'form' | 'collection' | 'post';
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      page: 'form',
    };
  }

  navigate(page) {
    alert(page);
    this.setState({ page });
  }

  componentDidMount() {
    //this.navigate('form');
  }

  render() {
    return (
      <div>
        {this.state.page === 'form' && (
          <PostForm navigate={this.navigate.bind(this)} />
        )}
        {this.state.page === 'collection' && <div></div>}
        {this.state.page === 'post' && <Post />}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
