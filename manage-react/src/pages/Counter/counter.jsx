import React, { Component } from 'react';
import { increment, decrement, reset } from '../../redux/actions/index';
// import { connect } from 'react-redux';
import store from '../../redux/store';
import '../../styles/counter.scss'
export default class Counter extends Component {
  constructor (props, context) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handReset = this.handReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount () {
    this.setState({ count: store.getState().default.default.count })
  }

  handleIncrement () {
    console.log(store.getState().default.default.count)
    store.dispatch(increment)
  }

  handleDecrement () {
    store.dispatch(decrement)
  }

  handReset () {
    store.dispatch(reset)
  }

  render() {
    return (
      <div className="counter">
        <header className="counter-header">
          <button onClick = { ()=> this.handleIncrement() }>+</button>
          <button onClick = { ()=> this.handleDecrement() }>-</button>
          <button onClick = { () => this.handReset() }>reset</button>
          {/* <div>{this.state.count}</div> */}
        </header>
      </div>
    );
  }
}

