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

  render() {
    const details = this.state.story;
    const time = moment(details.time).startOf('day').fromNow();

    return (
      <li>
        <span className="arrow">&#x25B2;</span>
        <span className="article-title">{details.title}</span>
        <span className="article-domain">({details.url})</span>
        <span className="article-details">
          {details.score} points by {details.by} {time} | hide | {details.descendants} comments
        </span>
      </li>
    )
  }
}

export default Story;
