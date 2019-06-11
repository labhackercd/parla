import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

class App extends React.Component {
  render () {
    return (
      <h1 className="red">Django + React</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));