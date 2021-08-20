import React from 'react';

import Nav from '../components/Nav';
import ContinentDetails from '../components/ContinentDetails';
import CountryDetails from '../components/CountryDetails';
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
        <CountryDetails />
        <ContinentDetails />
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
