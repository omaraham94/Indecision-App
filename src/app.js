import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<HelloWorld/>, appRoot);

// this fails because we have not done babel configuration yet in webpack
