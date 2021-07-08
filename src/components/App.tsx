import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Toolbar from './toolbar/Toolbar';
import Gallery from './gallery/Gallery';

const App = () => (
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

export default App;
