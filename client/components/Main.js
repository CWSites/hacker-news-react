import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Story from './Story';

class Main extends React.Component {

  componentDidMount() {
    // this.props.fetchPosts('https://hacker-news.firebaseio.com/v0/topstories.json');

    // console.log(this.props);
    
    // let's kick off the fetch
    // fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    // .then(function(response) {
    //   response.json()
    //   .then(function(data) {
    //     console.log(this.props);
    //     this.props.addPostsAction(data);
    //   });
    // });


    fetchData = () => {
        this.fetchData('https://hacker-news.firebaseio.com/v0/topstories.json').then( // let's kick off the fetch
        // when fetch is done, dispatch the action that our reducer will take
            // console.log(this.props)
            r => this.props.dispatch(addPostsAction(r))
        );
    }    

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
