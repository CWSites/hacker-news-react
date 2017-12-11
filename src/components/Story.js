import React from 'react';

class Story extends React.Component {
  constructor(){
    super();

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

  this.props.parseTime(this.state.story.time);
  // this.props.parseDomain(this.state.story);

  render() {
    const details = this.state.story;

    return (
      <li>
        <span className="arrow">&#x25B2;</span>
        <span className="article-title">{details.title}</span>
        <span className="article-domain">({details.url})</span>
        <span className="article-details">
          {details.score} points by {details.by} {details.readableTime} {details.timeFrame} ago | hide | {details.descendants} comments
        </span>
      </li>
    )
  }
}

export default Story;
