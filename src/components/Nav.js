import React from 'react';
import Logo from '../assets/COVICALC.png';

function Nav() {
  return (
    <nav className='nav section'>
      <div className='nav-container'>
        <img className='nav-logo' src={Logo} alt='logo for covicalc website' />
        <button className='nav-btn'>
          <a href='#contact'>Contact</a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
