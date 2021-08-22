import React from 'react';

function SkillCard({ skillname, skills, skills_two, skills_three }) {
  return (
    <ul className='skill-list'>
      <h4 className='skill-name'>{`${skillname} :`}</h4>
      <div className='skill-items'>
        <li className='skill'>{skills}</li>
        <li className='skill'>{skills_two}</li>
        <li className='skill'>{skills_three}</li>
      </div>
    </ul>
  );
}

export default SkillCard;
