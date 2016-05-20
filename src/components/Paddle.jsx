import React from 'react';

export default class Paddle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posX: null
    }
  }

  componentDidMount() {
    this.moveToCenter();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.posX !== this.state.posX;
  }

  componentDidUpdate() {
    let paddle = this.refs.paddle;
    paddle.style.left = this.state.posX;
  }

  moveToCenter() {
    let { container, paddle } = this.refs;
    let center = (container.offsetWidth - paddle.offsetWidth)/2;
    this.setState({ posX: center });
  }

  render() {
    return (
      <div className="breakout__paddle-container" ref="container">
        <span className="breakout__paddle" ref="paddle" />
      </div>
    )
  }
}
