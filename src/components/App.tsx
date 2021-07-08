import React from 'react';
import Header from './Header';
import Toolbar from './toolbar/Toolbar';
import Gallery from './gallery/Gallery';

const App = () => (
  <section className="app">
    <Header />
    <Toolbar />
    <Gallery />
  </section>
);

export default App;
