import React from 'react';
import moment from 'moment';

class Story extends React.Component {
  constructor(){
    super();

    // set initial state
    this.state = {
      story: {}
    };
  }

  componentDidMount() {
    this.fetchStory();
  }

  // fetch story details
  fetchStory() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.post}.json`)
    .then(response => response.json()
    .then(data => this.setState({ story: data })));
  }

  // parse the full url and only return the domain
  parseDomain(url) {
    if(url) {
      if (url.indexOf("://") > -1) {
        url = url.split('/')[2];
      } else {
        url = url.split('/')[0];
      }
    }

    return url;
  }

  // time comparison in minutes to determine display
  parseTimestamp(timestamp) {
    let now = moment().unix(),
        time = Math.trunc((now - timestamp)/60),
        postTime = '';

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
    const details = this.state.story,
          domain = this.parseDomain(details.url),
          timestamp = this.parseTimestamp(details.time);

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

Story.propTypes = {
  post: React.PropTypes.object.isRequired
}

export default Story;
