import React, { Component } from 'react';
import { increment, decrement } from '../../redux/actions/index';
import store from '../../redux/store';
import '../../styles/counter.scss';
import { connect } from 'react-redux';

connect(state => ({
  count: state.count
}))

export default class Counter extends Component {
  constructor (props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.state = {
      count: 0
    };
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
          <span>{ store.getState().default.count }</span>
          <button onClick = { ()=> this.handleDecrement() }>-</button>
        </header>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   }
// };
// const mapDispatchToProps = { increment, decrement };

// connect(mapStateToProps, mapDispatchToProps)(Counter);