import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries } from '../actions/countriesActions';

function CountryDetails() {
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selected, setSelected] = useState([]);

  const dispatch = useDispatch();

  const { countries } = useSelector((state) => state.countriesList);

  useEffect(() => {
    dispatch(allCountries());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSelectedCountry(
      countries.filter((country) => {
        return country.country.includes(selected);
      }),
    );
  };

  return (
    <>
      <section className='section-one'>
        <div className='section-one--header section'>
          <h1 className='section-one--title'>UPDATES</h1>
          <p className='section-one--text'>Search a country</p>
        </div>

        <form className='section-one--form section' onSubmit={submitHandler}>
          <select
            className='section-one--language form-item'
            onChange={(e) => setSelected(e.target.value)}
          >
            {countries.map((country) => (
              <option>{country.country}</option>
            ))}
          </select>
          <input className='section-one--date form-item' type='date' />
          <button className='form-btn form-item'>Submit</button>
        </form>
      </section>
      <section className='section-two'>
        {selectedCountry.map((total) => (
          <div className='section-two--container'>
            <h1 className='section-two--title'>{total.cases}</h1>
            <p className='section-two--text'>Cumulatively</p>
          </div>
        ))}
      </section>
      <section className='section-three'>
        {selectedCountry.map((country) => (
          <div className='section-three--container'>
            <div className='section-three--card'>
              <h2 className='section-three--title'>
                {country.oneTestPerPeople}
              </h2>
              <p className='section-three--text'>Tests</p>
              <h5 className='section-three--subTilte'>{country.tests}</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>{country.todayCases}</h2>
              <p className='section-three--text'>Positive Cases</p>
              <h5 className='section-three--subTilte'>{country.active}</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>
                {country.criticalPerOneMillion}
              </h2>
              <p className='section-three--text'>Hospitalized</p>
              <h5 className='section-three--subTilte'>{country.critical}</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>{country.todayRecovered}</h2>
              <p className='section-three--text'>Recovery</p>
              <h5 className='section-three--subTilte'>{country.recovered}</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>{country.todayDeaths}</h2>
              <p className='section-three--text'>Deaths</p>
              <h5 className='section-three--subTilte'>{country.deaths}</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>-</h2>
              <p className='section-three--text'>Vaccinated</p>
              <h5 className='section-three--subTilte'>-</h5>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default CountryDetails;
