import React from 'react';
import {render} from 'react-dom';
import Breakout from './components/Breakout.jsx';

class App extends React.Component {
  render () {
    return (
      <Breakout />
    );
  }
}

render(<App/>, document.getElementById('app'));
