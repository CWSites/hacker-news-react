import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Story from './Story';

class Main extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(r => this.props.addPostsAction(r));
  }    

  render() {
    return (
      <div>
        <Header />
        <div className="news">
          <ol className="news-articles">
            {this.props.posts.slice(0, 25).map((post, i) => <Story {...this.props.post} key={i} id={i} post={post} />)}
          </ol>
          <a href="#">More</a>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
