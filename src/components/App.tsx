import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Header from './Header';
import Toolbar from './toolbar/Toolbar';
import Gallery from './gallery/Gallery';

import reducer from '../store/reducer';
import { Action, DispatchType, State } from '../store/types';

const store: Store<State, Action> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <section className="app">
          <Header />
          <Toolbar />
          <Gallery />
        </section>
      </Route>
    </Router>
  </Provider>
);

export default App;
