import React, { useState, useEffect } from 'react';
import Itemcoursel from 'react-items-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { allContinents } from '../actions/continentsActions';
import { useWindowSize } from '../util/Resize';
import ArrowRight from '../assets/ic-arrows-right.svg';
import ContinentContainer from './resuableComponents/ContinentContainer';

function Continents() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const size = useWindowSize();

  const chevronWidth =
    size && size.width > 960 ? 80 : size.width > 500 ? 60 : 40;

  const { continents } = useSelector((state) => state.continentsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allContinents());
  }, [dispatch]);

  return (
    <>
      <section
        className='section-four'
        style={{ padding: `0 ${chevronWidth}px` }}
      >
        <h1 className='section-four--title'>PER CONTINENTS</h1>
        <Itemcoursel
          style
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={size && size.width >= 900 ? 3 : 1}
          gutter={70}
          showSlither={true}
          leftChevron={
            <button className='arrow-left'>
              <img src={ArrowRight} alt='' />
            </button>
          }
          rightChevron={
            <button className='arrow-right'>
              <img src={ArrowRight} alt='' />
            </button>
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {continents.map((continent) => (
            <ContinentContainer continent={continent} />
          ))}
        </Itemcoursel>
      </section>
    </>
  );
}

export default Continents;
