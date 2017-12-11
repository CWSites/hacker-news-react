import React from 'react';
import moment from 'moment';

class Story extends React.Component {
  constructor(){
    super();

    this.parseDomain = this.parseDomain.bind(this);
    this.parseTime = this.parseTime.bind(this);

    // getInitialState
    this.state = {
      story: {}
    };
  }

  componentDidMount() {
    const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`;
    var that = this;
    var url = storyUrl;

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ story: data });
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
    let now = moment().unix();
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

    // this.setState({
    //   story: {
    //     timeframe: timeframe,
    //     timeago: timeago
    //   }
    // });
  }

  render() {
    const details = this.state.story;
    this.parseTime(this.state.story.time);

    return (
      <li>
        <span className="arrow">&#x25B2;</span>
        <span className="article-title">{details.title}</span>
        <span className="article-domain">({details.url})</span>
        <span className="article-details">
          {details.score} points by {details.by} {details.timeago} {details.timeframe} ago | hide | {details.descendants} comments
        </span>
      </li>
    )
  }
}

export default Story;
