import React from 'react';

import Brick from './Brick.jsx';
import Ball from './Ball.jsx';
import Paddle from './Paddle.jsx';

require('../styles.scss');

export default class Breakout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      leftPressed: false,
      rightPressed: false
    }

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }

  componentDidMount() {
    if (document) {
      document.addEventListener('keydown', this.keyDownHandler, false);
      document.addEventListener('keyup', this.keyUpHandler, false);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()');
    return this.state.leftPressed !== nextState.leftPressed || this.state.rightPressed !== nextState.rightPressed;
  }

  keyDownHandler(e) {
    let paddle = this.refs.paddle;
    let paddlePos = paddle.state.posX;
    // console.log(this.refs);
    if (e.keyCode === 37) {
      paddle.setState({ posX: paddlePos - 10 });
      this.setState({ leftPressed: true });
    } else if (e.keyCode === 39) {
      paddle.setState({ posX: paddlePos + 10 });
      this.setState({ rightPressed: true });
    }
  }

  keyUpHandler(e) {
    if (e.keyCode === 37) {
      this.setState({ leftPressed: false });
    } else if (e.keyCode === 39) {
      this.setState({ rightPressed: false });
    }
  }

  renderBricks() {
    let bricks = [];

    for (let i = 1; i <= this.props.ballCount; i++) {
      bricks.push(<Brick key={ i } />);
    }

    return (
      <div className="breakout__bricks-container" ref="brickArea">
        { bricks }
      </div>
    );
  }

  render() {
    return (
      <div className="breakout" ref="container">
        { this.renderBricks() }
        <Paddle ref="paddle" />
      { /*
        <Ball /> */ }
      </div>
    )
  }
}

Breakout.defaultProps = {
  ballCount: 15
};
