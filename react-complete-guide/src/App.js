import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
    // This is what it looks like without JSX:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'))
  }
}

export default App;
