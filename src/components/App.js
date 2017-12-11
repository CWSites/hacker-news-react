import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Story from './Story';

// Get Top Stores
// https://hacker-news.firebaseio.com/v0/topstories.json
// Loop through top stories IDs and grab story info
//

class App extends React.Component {
  constructor(){
    super();

    this.parseDomain = this.parseDomain.bind(this);
    // getInitialState
    this.state = {
      articles: {}
    };
  }

  componentDidMount() {
    var that = this;
    var url = 'https://hacker-news.firebaseio.com/v0/topstories.json'

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ articles: data });
    });
  }

  parseDomain(key) {
    const story = {...this.state.story};
    console.log(story);
    // const domain = story.url;
    // story[key].domain = domain;
    this.setState({ story })
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
                .map(key => <Story key={key} id={this.state.articles[key]} parseDomain={this.parseDomain} />)
            }
          </ol>
          <a href="">More</a>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
