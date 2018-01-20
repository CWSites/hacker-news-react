import React from 'react';
import moment from 'moment';

class Story extends React.Component {
  constructor(){
    super();

    // getInitialState
    this.state = {
      story: {}
    };
  }

  componentDidMount() {
    this.fetchStory(); // fetch top stories from hacker news API
  }

  fetchStory() {
    const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${this.props.post}.json`;

    fetch(storyUrl)
    .then(response => response.json()
    .then(data => this.setState({ story: data })));

    // fetch(storyUrl)
    // .then(response => response.json()
    // .then(data => this.props.loadStories(data)));
  }

  // parse the full url and only return the domain
  parseDomain(url) {
    let domain = url;

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

    // make time comparison in minutes to determine display
    if (time > 2880) {
      postTime = Math.trunc(time / 24) + ' days';
    } else if (time > 1440) {
      postTime = '1 day';
    } else if (time > 120) {
      postTime = Math.trunc(time / 60) + ' hours';
    } else if (time > 60 && time < 120) {
      postTime = '1 hour';
    } else if (time < 60 && time > 1) {
      postTime = Math.trunc(time) + ' minutes';
    } else {
      postTime = 'less than 1 minute';
    }

    return postTime;
  }

  render() {
    const details = this.state.story;
    const domain = this.parseDomain(details.url);
    const timestamp = this.parseTimestamp(details.time);

    return (
      <li>
        <span className="arrow">&#x25B2;</span>
        <span className="article-title">{details.title}</span>
        <span className="article-domain">({domain})</span>
        <span className="article-details">
          {details.score} points by {details.by} {timestamp} ago | hide | {details.descendants} comments
        </span>
      </li>
    )
  }
}

export default Story;
