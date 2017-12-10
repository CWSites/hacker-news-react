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

export default App;
