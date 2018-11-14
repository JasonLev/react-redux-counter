import React, { Component } from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';

const reducer = () => {
  return {
    count: 100
  }
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>React Redux Counter</h1>
          </header>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
