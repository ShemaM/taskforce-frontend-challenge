import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allStates } from '../actions/stateActions';
import StatesContainer from './resuableComponents/StatesContainer';

function Details() {
  const [selectedState, setSelectedState] = useState([]);
  const [selected, setSelected] = useState([]);

  const dispatch = useDispatch();

  const { states } = useSelector((state) => state.statesList);

  useEffect(() => {
    dispatch(allStates());
  }, [dispatch]);

  useEffect(() => {
    const capital = states.filter((state) => {
      return state.state.includes('Washington');
    });
    setSelectedState(capital);
  }, [states]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSelectedState(
      states.filter((state) => {
        return state.state.includes(selected);
      }),
    );
  };

  return (
    <>
      <section className='section-one'>
        <div className='section-one--header section'>
          <h1 className='section-one--title'>UPDATES</h1>
          <p className='section-one--text'>Search a State</p>
        </div>

        <form className='section-one--form section' onSubmit={submitHandler}>
          <select
            className='section-one--language form-item'
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value='Washington'>Washington</option>
            {states.map((state) => (
              <option required>{state.state}</option>
            ))}
          </select>
          <input className='section-one--date form-item' type='date' required />
          <button className='form-btn form-item'>Submit</button>
        </form>
      </section>
      <section className='section-two'>
        {selectedState.map((total) => (
          <div className='section-two--container'>
            <h1 className='section-two--title'>
              {total.cases.toLocaleString()}
            </h1>
            <p className='section-two--text'>Cumulatively</p>
          </div>
        ))}
      </section>
      <section className='section-three'>
        {selectedState.map((state) => (
          <StatesContainer state={state} />
        ))}
      </section>
    </>
  );
}

export default Details;
