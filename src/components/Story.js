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
    const that = this;
    const url = storyUrl;

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

  parseDomain(url) {
    let domain = '';

    if (url) {
      if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
      } else {
        domain = url.split('/')[0];
      }
    }

    return domain;
  }

  parseTime(time) {
    let now = moment().unix();
    let timeago = Math.trunc((now - time)/60);
    let timeframe = "hour";

    // parse time and adjust timeframe as necessary
    if (timeago < 60){
      timeframe = "minutes";
    }
    if (timeago > 60){
      timeframe = "hours";
      timeago = Math.round(timeago / 60);
    }
    if (timeago > 1440){
      timeframe = "days";
      timeago = Math.round(timeago / 24);
    }

    return({
      timeago: timeago,
      timeframe: timeframe
    });
  }

  render() {
    const details = this.state.story;
    const timeDetails = this.parseTime(details.time);
    const domain = this.parseDomain(details.url);

    return (
      <li>
        <span className="arrow">&#x25B2;</span>
        <span className="article-title">{details.title}</span>
        <span className="article-domain">({domain})</span>
        <span className="article-details">
          {details.score} points by {details.by} {timeDetails.timeago} {timeDetails.timeframe} ago | hide | {details.descendants} comments
        </span>
      </li>
    )
  }
}

export default Story;
