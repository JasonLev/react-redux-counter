import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component {
  constructor(props){
    super(props)
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.props.dispatch({type: 'INCREMENT'})
  }
  decrement() {
    this.props.dispatch({type: 'DECREMENT'})
  }
  render() {
    return (
      <main>
        <button onClick={this.decrement}>&ndash;</button>
        <span className={this.props.count < 0 ? 'count red': 'count'}>
          {this.props.count}
        </span>
        <button onClick={this.increment}>+</button>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
