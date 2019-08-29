import React, { Component } from 'react';
import { increment, decrement } from '../../store/login/action';
import '../../assets/styles/counter.scss';
import { connect } from 'react-redux';

connect(state => ({
  count: state.count
}))

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // count: 0
    };
  }

  handleIncrement=() => {
    this.props.increment();
  }

  handleDecrement= () => {
    this.props.decrement();
  }

  render() {
    let counter = this.props.result.count
    return (
      <header className="counter">
        <button onClick = { this.handleIncrement }> + </button>
        <span>{ counter }</span>
        <button onClick = { this.handleDecrement }> - </button>
      </header>
    );
  }
}

export default connect(state => ({
  result: state.result
}),{
  increment,
  decrement
})(Counter);