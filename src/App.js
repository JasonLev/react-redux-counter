import React, { Component } from 'react';
import Counter from './components/Counter';
import reducer from './reducers/counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';

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
