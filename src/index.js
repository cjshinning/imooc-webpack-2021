import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './home';
import List from './list';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/list" component={List}></Route>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));