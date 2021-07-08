import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import './styles/index.scss';

import { Action, DispatchType, State } from './store/types';
import reducer from './store/reducer';

const store: Store<State, Action> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
