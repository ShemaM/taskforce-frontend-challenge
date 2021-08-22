import React from 'react';
import me from '../assets/me.jpg';
import SkillCard from './resuableComponents/SkillCard';

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
            <SkillCard
              skillname={'Design tools'}
              skills={'Figma'}
              skills_two={'Adobe'}
            />

            <SkillCard skillname={'Language'} skills={'Javascript'} />

            <SkillCard
              skillname={'Frameworks'}
              skills={'React'}
              skills_two={'Nodejs(express'}
            />

            <SkillCard
              skillname={'Database'}
              skills={'MongoDB'}
              skills_two={'Redis'}
              skills_three={'Postgress'}
            />
          </div>
          <time style={{ textAlign: 'center', margin: '2rem' }}>
            22 August 2021
          </time>
        </div>
      </section>
    </>
  );
}

export default Profile;
