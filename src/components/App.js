import React from 'react';
import moment from 'moment';

import Header from './Header';
import Footer from './Footer';
import Story from './Story';

class App extends React.Component {
  constructor(){
    super();

    this.parseDomain = this.parseDomain.bind(this);
    this.parseTime = this.parseTime.bind(this);

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

  parseDomain(story) {
    // const story = {...this.state.story};
    // console.log(story);
    // const domain = story.url;
    // story[key].domain = domain;
    // this.setState({ story })
  }

  parseTime(time) {
    // console.log(story);
    const now = moment().unix();
    let timeago = Math.trunc((now - time)/60/60);
    let timeframe = "hour";

    // parse time and adjust timeframe as necessary
    if (timeago > 1){
      timeframe = "hours";
    }
    if (timeago > 24){
      timeframe = "days";
      timeago = Math.round(timeago / 24);
    }

    this.setState({
      story: {
        timeFrame: timeframe,
        readableTime: timeago
      }
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
                .map(key => <Story key={key} id={this.state.articles[key]} parseTime={this.parseTime} parseDomain={this.parseDomain} />)
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
