import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <h2>Hours: {this.props.hours}</h2>
        <h2>Minutes: {this.props.minutes}</h2>
      </div>
    )
  }
}

export default Movie
