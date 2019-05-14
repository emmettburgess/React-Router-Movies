import React, { Component } from "react";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import { Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });

  };
  

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" render={ (props) => <MovieList list={this.state.savedList} {...props} /> } />
          <Route path="/movies/:id" render={ (props) => <Movie addToSavedList={this.addToSavedList} savedList={this.state.savedList} {...props} /> } />
        </div>
      </div>
    );
  }
}
