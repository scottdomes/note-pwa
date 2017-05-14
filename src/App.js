import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
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
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notes/1">Note 1</Link></li>
            <li><Link to="/add">New</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={ListContainer}/>
          <Route path="/notes/:id" component={NoteContainer}/>
          <Route path="/add" component={AddNoteContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
