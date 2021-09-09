import React from 'react';

import Nav from '../components/Nav';
import Continents from '../components/Continents';
import States from '../components/States';
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
        <States />
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
