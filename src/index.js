import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div>This is Home page</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));