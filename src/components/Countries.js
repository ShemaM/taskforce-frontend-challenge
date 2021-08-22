import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries } from '../actions/countriesActions';
import CountriesContainer from './resuableComponents/CountriesContainer';

function CountryDetails() {
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selected, setSelected] = useState([{ country: 'Rwanda' }]);

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
              <option required>{country.country}</option>
            ))}
          </select>
          <input className='section-one--date form-item' type='date' required />
          <button className='form-btn form-item'>Submit</button>
        </form>
      </section>
      <section className='section-two'>
        {selectedCountry.map((total) => (
          <div className='section-two--container'>
            <h1 className='section-two--title'>
              {total.cases.toLocaleString()}
            </h1>
            <p className='section-two--text'>Cumulatively</p>
          </div>
        ))}
      </section>
      <section className='section-three'>
        {selectedCountry.map((country) => (
          <CountriesContainer country={country} />
        ))}
      </section>
    </>
  );
}

export default CountryDetails;
