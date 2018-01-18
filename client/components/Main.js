import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Story from './Story';

class Main extends React.Component {

  componentDidMount() {
    // fetch top stories from hacker news API
    this.fetchData();
  }

  fetchData() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json()
    .then(data => this.props.loadPosts(data)));
  }

  loadMorePosts(num_posts) {
    console.log('load ' + num_posts + ' more posts...');

  }

  render() {
    return (
      <div>
        <Header />
        <div className="news">
          <ol className="news-articles">
            {this.props.posts.slice(0, 25).map((post, i) => <Story {...this.props.post} key={i} id={i} post={post} />)}
          </ol>
          <a href="#" onClick={() => this.loadMorePosts(25)}>More</a>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
