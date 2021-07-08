import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Toolbar from './toolbar/Toolbar';
import Gallery from './gallery/Gallery';
import { useDispatch } from 'react-redux';
import { loadCards } from '../store/actionCreators';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  return (
    <Router>
      <Route exact path="/">
        <section className="app">
          <Header />
          <Toolbar />
          <Gallery />
        </section>
      </Route>
    </Router>
  );
};

export default App;
