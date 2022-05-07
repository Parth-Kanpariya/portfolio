import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
// import Testinomials from './components/testinomials/Testinomials';
import Contacts from './components/contacts/Contacts';
import Menu from './components/menu/Menu';
import { useState } from 'react';
import './app.scss';

function App() {

  const [menuOpen, setMenuOpen] =useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       <div className="sections">
       <Intro />
       <Portfolio />
       <Works />
       {/* <Testinomials /> */}
       <Contacts />

       </div>
    </div>
  );
}

export default App;
