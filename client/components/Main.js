import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Story from './Story';

// old react app, temporarily not used
class Main extends React.Component {
  constructor(){
    super();

    // getInitialState
    this.state = {
      articles: {}
    };
  }

  componentDidMount() {
    this.props.loadPosts('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  render(){

    return (
      <div>
        <Header />
        <div className="news">
          <ol className="news-articles">
            {
              Object
                .keys(this.state.articles)
                .slice(0, 25)
                .map(key => <Story key={key} id={this.state.articles[key]} />)
            }
          </ol>
          <a href="">More</a>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
