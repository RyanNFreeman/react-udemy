import React from 'react';
import './App.css';
import Banana from './Person/Person';
// you can import default exports as anything you wish, but remember to capitalize
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Banana name='Joe' age='36'>My Hobbies: SVG animation, guitar</Banana>
        <Banana name='Big Joe' age='60'>My Hobbies: cycling, cooking, carpentry</Banana>
      </div>
    );
    // You can pass children to a React component in between the opening and closing JSX tags. To render, you'd access children via props, using the key 'children'. {props.children}  In this way, you can pass complex elements like a list, or just a simple string.
    // This is what it looks like without JSX:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'))
  }
}

export default App;
