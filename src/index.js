import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class App extends Component {
  render() {
    return (
      <div>
        <div>{_.join(['This', 'is', 'app'], ' ')}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));