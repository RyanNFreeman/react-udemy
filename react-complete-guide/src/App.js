import React from 'react';
import './App.css';
import Banana from './Person/Person';
// you can import default exports as anything you wish, but remember to capitalize
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Banana />
        <Banana />
      </div>
    );
    // This is what it looks like without JSX:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'))
  }
}

export default App;
