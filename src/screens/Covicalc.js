import React from 'react';

import Nav from '../components/Nav';
import Continents from '../components/Continents';
import Countries from '../components/Countries';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Covicalc() {
  return (
    <>
      <header className='header'>
        <Nav />
      </header>
      <main className='main'>
        <Countries />
        <Continents />
        <Profile />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Covicalc;
