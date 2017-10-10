import React, { Component } from 'react';
import Movie from './Movie.js';



class App extends Component {
  render() {
    return (
      <div>
        <h1>LOTR Movies</h1>
        <Movie title="The Fellowship of the Ring" hours="2" minutes="58" />
        <Movie title="The Two Towers" hours="2" minutes="59" />
        <Movie title="The Return of the King" hours="3" minutes="21" />
      </div>
    );
  }
}

export default App;
