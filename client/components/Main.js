import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Story from './Story';

class Main extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  // fetch top 25 stories
  fetchData() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json()
    .then(data => this.props.loadPosts(data)));
  }

  // work in progress...
  loadMorePosts(num_posts) {
    console.log('load ' + num_posts + ' more posts...');
  }

  render() {
    return (
      <div>
        <Header />
        <div className="news">
          <ol className="news-articles">
            {this.props.posts.map((post, i) => <Story {...this.props.post} key={i} id={i} post={post} />)}
          </ol>
          <a href="#" onClick={() => this.loadMorePosts(25)}>More</a>
        </div>
        <Footer />
      </div>
    )
  }
}

Main.propTypes = {
  loadPosts: React.PropTypes.func.isRequired,
  posts: React.PropTypes.array.isRequired,
  post: React.PropTypes.object.isRequired
}

export default Main;
