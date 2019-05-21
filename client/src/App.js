import React, { Component } from "react";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  NavLink } from "react-router-dom";

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
          <nav>
            <NavLink exact to="/">Movie List</NavLink>
          </nav>



          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" render={ (props) => <Movie {...props} items={this.state.items} />}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);