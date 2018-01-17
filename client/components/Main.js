import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Story from './Story';

class Main extends React.Component {
  componentWillMount() {
    this.props.fetchPosts('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  componentDidMount() {
    // console.log(this.props);
    // this.props.updateDisplay(this.props.posts);    
  }

  render() {
    return (
      <div>
        <Header />
        <div className="news">
          <ol className="news-articles">
            {this.props.posts.slice(0, 25).map((post, i) => <Story {...this.props} key={i} id={i} post={post} />)}
          </ol>
          <a href="#">More</a>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
