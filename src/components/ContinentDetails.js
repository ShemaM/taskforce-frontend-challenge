import React, { useState } from 'react';
import Itemcoursel from 'react-items-carousel';
import { useWindowSize } from '../util/Resize';
import ArrowLeft from '../assets/ic-arrows-left.svg';
import ArrowRight from '../assets/ic-arrows-right.svg';

function ContinentDetails() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const size = useWindowSize();

  const chevronWidth =
    size && size.width > 960 ? 80 : size.width > 500 ? 60 : 40;

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
          gutter={20}
          showSlither={true}
          leftChevron={
            <button className='arrow-left'>
              <img src={ArrowLeft} alt='' />
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
          <div className='section-four--container'>
            <div className='leftCard'>
              <h2 className='leftCard-title'>AFRICA</h2>
              <div className='leftCard-middle'>
                <h1 className='leftCard-number'>11,270</h1>
                <p className='leftCard-text'>New cases</p>
              </div>
              <p className='leftCard-total'>
                All cases <span>1294343034045</span>
              </p>
            </div>
            <div className='rightCard'>
              <div className='rightCard-row'>
                <h3 className='rightCard-title'>619</h3>
                <p className='rightCard-text'>New deaths</p>
                <p className='rightCard-total'>
                  Total deaths: <span>111000</span>
                </p>
              </div>
              <div className='rightCard-row rightCard-middle'>
                <h3 className='rightCard-title'>12,993</h3>
                <p className='rightCard-text'>Newly recovered</p>
                <p className='rightCard-total'>
                  Total recovered: <span>111056630</span>
                </p>
              </div>
              <div className='rightCard-row'>
                <h3 className='rightCard-title'>12,993</h3>
                <p className='rightCard-text'>Newly recovered</p>
                <p className='rightCard-total'>
                  Total recovered: <span>111056630</span>
                </p>
              </div>
            </div>
          </div>
          <div className='section-four--container'>
            <div className='leftCard'>
              <h2 className='leftCard-title'>AFRICA</h2>
              <div className='leftCard-middle'>
                <h1 className='leftCard-number'>11,270</h1>
                <p className='leftCard-text'>New cases</p>
              </div>
              <p className='leftCard-total'>
                All cases <span>1294343034045</span>
              </p>
            </div>
            <div className='rightCard'>
              <div className='rightCard-row'>
                <h3 className='rightCard-title'>619</h3>
                <p className='rightCard-text'>New deaths</p>
                <p className='rightCard-total'>
                  Total deaths: <span>111000</span>
                </p>
              </div>
              <div className='rightCard-row rightCard-middle'>
                <h3 className='rightCard-title'>12,993</h3>
                <p className='rightCard-text'>Newly recovered</p>
                <p className='rightCard-total'>
                  Total recovered: <span>111056630</span>
                </p>
              </div>
              <div className='rightCard-row'>
                <h3 className='rightCard-title'>12,993</h3>
                <p className='rightCard-text'>Newly recovered</p>
                <p className='rightCard-total'>
                  Total recovered: <span>111056630</span>
                </p>
              </div>
            </div>
          </div>
          <div className='section-four--container'>
            <div className='leftCard'>
              <h2 className='leftCard-title'>AFRICA</h2>
              <div className='leftCard-middle'>
                <h1 className='leftCard-number'>11,270</h1>
                <p className='leftCard-text'>New cases</p>
              </div>
              <p className='leftCard-total'>
                All cases <span>1294343034045</span>
              </p>
            </div>
            <div className='rightCard'>
              <div className='rightCard-row'>
                <h3 className='rightCard-title'>619</h3>
                <p className='rightCard-text'>New deaths</p>
                <p className='rightCard-total'>
                  Total deaths: <span>111000</span>
                </p>
              </div>
              <div className='rightCard-row rightCard-middle'>
                <h3 className='rightCard-title'>12,993</h3>
                <p className='rightCard-text'>Newly recovered</p>
                <p className='rightCard-total'>
                  Total recovered: <span>111056630</span>
                </p>
              </div>
              <div className='rightCard-row'>
                <h3 className='rightCard-title'>12,993</h3>
                <p className='rightCard-text'>Newly recovered</p>
                <p className='rightCard-total'>
                  Total recovered: <span>111056630</span>
                </p>
              </div>
            </div>
          </div>
          <div className='section-four--container'>
            <div className='leftCard'>
              <h2 className='leftCard-title'>AFRICA</h2>
              <div className='leftCard-middle'>
                <h1 className='leftCard-number'>11,270</h1>
                <p className='leftCard-text'>New cases</p>
              </div>
              <p className='leftCard-total'>
                All cases <span>1294343034045</span>
              </p>
            </div>
            <div className='rightCard'>
              <div className='rightCard-row'>
                <h3 className='rightCard-title'>619</h3>
                <p className='rightCard-text'>New deaths</p>
                <p className='rightCard-total'>
                  Total deaths: <span>111000</span>
                </p>
              </div>
              <div className='rightCard-row rightCard-middle'>
                <h3 className='rightCard-title'>12,993</h3>
                <p className='rightCard-text'>Newly recovered</p>
                <p className='rightCard-total'>
                  Total recovered: <span>111056630</span>
                </p>
              </div>
              <div className='rightCard-row'>
                <h3 className='rightCard-title'>12,993</h3>
                <p className='rightCard-text'>Newly recovered</p>
                <p className='rightCard-total'>
                  Total recovered: <span>111056630</span>
                </p>
              </div>
            </div>
          </div>
        </Itemcoursel>
      </section>
    </>
  );
}

export default ContinentDetails;
