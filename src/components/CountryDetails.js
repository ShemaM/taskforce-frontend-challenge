import React, { useState } from 'react';
import Itemcoursel from 'react-items-carousel';
import { useWindowSize } from '../util/Resize';

function CountryDetails() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;

  const size = useWindowSize();

  return (
    <>
      <section className='section-one'>
        <div className='section-one--header section'>
          <h1 className='section-one--title'>UPDATES</h1>
          <p className='section-one--text'>Search a country</p>
        </div>

        <form className='section-one--form section'>
          <select className='section-one--language form-item'>
            <option value='country'>country</option>
          </select>
          <input className='section-one--date form-item' type='date' />
          <button className='form-btn form-item'>Submit</button>
        </form>
      </section>
      <section className='section-two'>
        <div className='section-two--container'>
          <h1 className='section-two--title'>2,188,881</h1>
          <p className='section-two--text'>Cumulatively</p>
        </div>
      </section>
      <section
        className='section-three'
        style={{ padding: `0 ${chevronWidth}px` }}
      >
        <div className='section-three--container'>
          <Itemcoursel
            style
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            // numberOfCards={3}
            numberOfCards={size && size.width >= 400 ? 2 : 1}
            gutter={2}
            leftChevron={<button className='arrow-left'>{'<'}</button>}
            rightChevron={<button className='arrow-right'>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <div className='section-three--card'>
              <h2 className='section-three--title'>11,270</h2>
              <p className='section-three--text'>Tests</p>
              <h5 className='section-three--subTilte'>2,188,299</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>11,270</h2>
              <p className='section-three--text'>Tests</p>
              <h5 className='section-three--subTilte'>2,188,299</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>11,270</h2>
              <p className='section-three--text'>Tests</p>
              <h5 className='section-three--subTilte'>2,188,299</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>11,270</h2>
              <p className='section-three--text'>Tests</p>
              <h5 className='section-three--subTilte'>2,188,299</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>11,270</h2>
              <p className='section-three--text'>Tests</p>
              <h5 className='section-three--subTilte'>2,188,299</h5>
            </div>
            <div className='section-three--card'>
              <h2 className='section-three--title'>11,270</h2>
              <p className='section-three--text'>Tests</p>
              <h5 className='section-three--subTilte'>2,188,299</h5>
            </div>
          </Itemcoursel>
        </div>
      </section>
    </>
  );
}

export default CountryDetails;
