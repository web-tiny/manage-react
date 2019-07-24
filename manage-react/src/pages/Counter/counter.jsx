import React, { Component } from 'react';
import { increment, decrement } from '../../redux/actions/index';
import store from '../../redux/store';
import '../../styles/counter.scss';


export default class Counter extends Component {
  constructor (props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount () {
    this.setState({ count: store.getState().default.count });
  }

  handleIncrement () {
    console.log(store.getState().default.count);
    store.dispatch(increment());
  }

  handleDecrement () {
    console.log(store.getState().default.count);
    store.dispatch(decrement());
  }

  render() {
    // let counter = store.getState().default.count;
    return (
      <div className="counter">
        <header className="counter-header">
          <button onClick = { ()=> this.handleIncrement() }>+</button>
          <button onClick = { ()=> this.handleDecrement() }>-</button>
          <div>{ store.getState().default.count }</div>
        </header>
      </div>
    );
  }
}

