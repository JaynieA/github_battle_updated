const React = require('react');
const ReactDOM = require('react-dom');
require ('./index.css');

//Components are concerned with 3 things:
// 1. State
// 2. Lifecycle Event
// 3. UI
class App extends React.Component {
  render() {
    return (
      <div>Hello Jaynie!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
