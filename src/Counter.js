import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component {
  render() {
    return (
      <main>
        <button>&ndash;</button>
        <span className="count">{this.props.count}</span>
        <button>+</button>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
