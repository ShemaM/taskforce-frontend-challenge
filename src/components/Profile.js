import React from 'react';
import me from '../assets/me.jpg';

function Profile() {
  return (
    <>
      <section className='section-five'>
        <div className='profile-image'>
          <img src={me} alt='' />
        </div>
        <div className='profile'>
          <h1 className='profile-name'>Shema Mugisha Christian</h1>
          <div className='skills-container'>
            <h1 className='skills-header'>Skills</h1>
            <ul className='skill-list'>
              <h4 className='skill-name'>Design tools :</h4>
              <div className='skill-items'>
                <li className='skill'>Figma</li>
                <li className='skill'>Adobe</li>
              </div>
            </ul>
            <ul className='skill-list'>
              <h4 className='skill-name'>Language :</h4>
              <div className='skill-items'>
                <li className='skill'>Javascript (Es6+)</li>
              </div>
            </ul>
            <ul className='skill-list'>
              <h4 className='skill-name'>Frameworks :</h4>
              <div className='skill-items'>
                <li className='skill'>React</li>
                <li className='skill'>Nodejs(express)</li>
              </div>
            </ul>

            <ul className='skill-list'>
              <h4 className='skill-name'>Database :</h4>
              <div className='skill-items'>
                <li className='skill'>MongoDB</li>
                <li className='skill'>Redis</li>
                <li className='skill'>Postgress</li>
              </div>
            </ul>
            <time>22 August 2021</time>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
