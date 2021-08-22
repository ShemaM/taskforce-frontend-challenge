import React from 'react';
import PropTypes from 'prop-types';

/**
 * return continent's data in jsx
 * @param   {Object} continent  Continent data
 * @return  {JSX}            Continent data
 */

function CountriesContainer({ country }) {
  return (
    <div className='section-three--container'>
      <div className='section-three--card'>
        <h2 className='section-three--title'>
          {country.oneTestPerPeople.toLocaleString()}
        </h2>
        <p className='section-three--text'>Tests</p>
        <h5 className='section-three--subTilte'>
          {country.tests.toLocaleString()}
        </h5>
      </div>
      <div className='section-three--card'>
        <h2 className='section-three--title'>
          {country.todayCases.toLocaleString()}
        </h2>
        <p className='section-three--text'>Positive Cases</p>
        <h5 className='section-three--subTilte'>
          {country.active.toLocaleString()}
        </h5>
      </div>
      <div className='section-three--card'>
        <h2 className='section-three--title'>
          {country.criticalPerOneMillion.toLocaleString()}
        </h2>
        <p className='section-three--text'>Hospitalized</p>
        <h5 className='section-three--subTilte'>
          {country.critical.toLocaleString()}
        </h5>
      </div>
      <div className='section-three--card'>
        <h2 className='section-three--title'>
          {country.todayRecovered.toLocaleString()}
        </h2>
        <p className='section-three--text'>Recovery</p>
        <h5 className='section-three--subTilte'>
          {country.recovered.toLocaleString()}
        </h5>
      </div>
      <div className='section-three--card'>
        <h2 className='section-three--title'>
          {country.todayDeaths.toLocaleString()}
        </h2>
        <p className='section-three--text'>Deaths</p>
        <h5 className='section-three--subTilte'>
          {country.deaths.toLocaleString()}
        </h5>
      </div>
      <div className='section-three--card'>
        <h2 className='section-three--title'>-</h2>
        <p className='section-three--text'>Vaccinated</p>
        <h5 className='section-three--subTilte'>-</h5>
      </div>
    </div>
  );
}

CountriesContainer.propTypes = {
  name: PropTypes.string.isRequired,
  oneTestPerPeople: PropTypes.number.isRequired,
  tests: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  criticalPerOneMillion: PropTypes.number.isRequired,
  critical: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
};

CountriesContainer.defaultProps = {
  name: 'name',
  oneTestPerPeople: 0,
  tests: 0,
  todayCases: 0,
  active: 0,
  criticalPerOneMillion: 0,
  critical: 0,
  todayRecovered: 0,
  recovered: 0,
  todayDeaths: 0,
  deaths: 0,
};

export default CountriesContainer;
