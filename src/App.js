import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  NoteContainer,
  ListContainer,
  AddNoteContainer
} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="container">
          <Route exact path="/" component={ListContainer}/>
          <Route path="/notes/:id" component={NoteContainer}/>
          <Route path="/add" component={AddNoteContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
