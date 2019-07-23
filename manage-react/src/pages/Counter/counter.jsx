import React, { Component } from 'react';
import { increment, decrement, reset } from './redux/actions/counter';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>当前计数：{ this.props.counter.count }</div>
          <button onClick = { ()=> this.props.increment() }>+</button>
          <button onClick = { ()=> this.props.decrement() }>-</button>
          <button onClick = { () => this.props.reset() }>reset</button>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);