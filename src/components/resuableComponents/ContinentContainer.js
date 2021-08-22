import React from 'react';
import PropTypes from 'prop-types';
import RightCard from './RightCard';

/**
 * return continent's data in jsx
 * @param   {Object} continent  Continent data
 * @return  {JSX}            Continent data
 */

function ContinentContainer({ continent }) {
  const { todayCases, todayDeaths, todayRecovered, recovered, cases, deaths } =
    continent;
  return (
    <div className='section-four--container'>
      <div className='leftCard'>
        <h2 className='leftCard-title'>{continent.continent}</h2>
        <div className='leftCard-middle'>
          <h1 className='leftCard-number'>{todayCases.toLocaleString()}</h1>
          <p className='leftCard-text'>New cases</p>
        </div>
        <p className='leftCard-total'>
          All cases <span>{cases.toLocaleString()}</span>
        </p>
      </div>
      <div className='rightCard'>
        <RightCard
          row_class={'rightCard-row'}
          today={todayDeaths.toLocaleString()}
          title_class={'rightCard-title'}
          text={'deaths'}
          text_class={'rightCard-text'}
          total={deaths.toLocaleString()}
          total_class={'rightCard-total'}
        />

        <RightCard
          row_class={'rightCard-row rightCard-middle'}
          today={todayRecovered.toLocaleString()}
          title_class={'rightCard-title'}
          text={'recovered'}
          text_class={'rightCard-text'}
          total={recovered.toLocaleString()}
          total_class={'rightCard-total'}
        />

        <RightCard
          row_class={'rightCard-row right'}
          today={'-'}
          title_class={'rightCard-title'}
          text={'vacinated'}
          text_class={'rightCard-text'}
          total={' -'}
          total_class={'rightCard-total'}
        />
      </div>
    </div>
  );
}

ContinentContainer.propTypes = {
  continent: PropTypes.string.isRequired,
  todayCases: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
};

ContinentContainer.defaultProps = {
  continent: 'continent',
  todayCases: 0,
  Cases: 0,
  todayDeaths: 0,
  Deaths: 0,
  Recovered: 0,
  todayRecovered: 0,
};

export default ContinentContainer;
