import React from 'react';
import moment from 'moment';

class Story extends React.Component {
  constructor(){
    super();

    this.parseDomain = this.parseDomain.bind(this);
    this.parseTimestamp = this.parseTimestamp.bind(this);

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

  parseTimestamp(timestamp) {
    let now = moment().unix();
    let time = Math.trunc((now - timestamp)/60);
    let postTime = "";

    // If less than one hour, show minutes
    if (time < 60){
      postTime = time + ' minutes';
    }
    // If greater than one hour, show hours
    if (time > 119){
      time = Math.round(time / 60);
      postTime = time + ' hours';
    }
    // If greater than one day, show days
    if (time > 1440){
      time = Math.round(time / 24);
      postTime = time + ' days';
    }

    return postTime;
  }

  render() {
    const details = this.state.story;
    const postTime = this.parseTimestamp(details.time);
    const domain = this.parseDomain(details.url);

    return (
      <li>
        <span className="arrow">&#x25B2;</span>
        <span className="article-title">{details.title}</span>
        <span className="article-domain">({domain})</span>
        <span className="article-details">
          {details.score} points by {details.by} {postTime} ago | hide | {details.descendants} comments
        </span>
      </li>
    )
  }
}

export default Story;
