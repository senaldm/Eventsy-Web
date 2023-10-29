import React, { useState } from 'react';
import './Quection.css';
import { images } from '../../constants';

const Quection = () => {
  const [visibleParagraph, setVisibleParagraph] = useState(-1);
  const [lineTopPosition, setLineTopPosition] = useState(50); // Initial line position

  const toggleParagraph = (index) => {
    if (index === visibleParagraph) {
      setVisibleParagraph(-1);
      setLineTopPosition(50); // Reset line position when hiding the paragraph
    } else {
      setVisibleParagraph(index);
      setLineTopPosition(225); // Adjust to the desired position when showing the paragraph
    }
  };

  return (
    <div id="faq">
      <div className='second_container'>
        <div className='subheading'>
          <h3>FAQ</h3>
        </div>
        <div className='heading'>
          <h1>Have a Question?</h1>
        </div>
        <div className='image'>
          <img src={images.design} alt="Stylish Image" />
        </div>
        <div className='quection_and_answers'>
          <h2 style={{ paddingBottom: '10px' }}>
            <span onClick={() => toggleParagraph(1)}>
              Are you a wholesale wine supplier? {visibleParagraph === 1 ? '−' : '+'}
            </span>
            <hr
              className={visibleParagraph === 1 ? 'active' : ''}
              style={{ top: `${lineTopPosition}px`,border:'0.3px solid white'}} // Set the top position dynamically
            />
          </h2>
          {visibleParagraph === 1 && (
            <div>
              <p style={{width:'50%'}}>
                Our winery produces craft wine. Bulk orders are possible, but lots cannot be large.
              </p>
            </div>
          )}

          {/* Create the desired space between h2 and hr elements */}
          

          {/* Repeat the same pattern for other questions */}
          {/* Add padding-bottom to h2 for additional space between hr and paragraphs */}
          <h2 style={{ paddingBottom: '10px' }}>
            <span onClick={() => toggleParagraph(2)}>
              Do you ship wine within the USA? {visibleParagraph === 2 ? '−' : '+'}
            </span>
            <hr
              className={visibleParagraph === 2 ? 'active' : ''}
              style={{ top: `${lineTopPosition}px`, }} // Set the top position dynamically
            />
          </h2>
          {visibleParagraph === 2 && (
            <div>
              <p style={{width:'50%'}}>
                Yes, we ship your orders to any state and city in the United States, as well as abroad.
              </p>
            </div>
          )}
           <h2 style={{ paddingBottom: '10px' }}>
            <span onClick={() => toggleParagraph(3)}>
            How many varieties are there in your winery? {visibleParagraph === 3 ? '−' : '+'}
            </span>
            <hr
              className={visibleParagraph === 3 ? 'active' : ''}
              style={{ top: `${lineTopPosition}px` }} // Set the top position dynamically
            />
          </h2>
          {visibleParagraph === 3 && (
            <div>
              <p style={{width:'50%'}}>
              Our winery offers wine-lovers more than 10 different varieties of wines with different aging periods.
              </p>
            </div>
          )}
           <h2 style={{ paddingBottom: '10px' }}>
            <span onClick={() => toggleParagraph(4)}>
            Do you advise on the choice of wine? {visibleParagraph === 4 ? '−' : '+'}
            </span>
            <hr
              className={visibleParagraph === 4 ? 'active' : ''}
              style={{ top: `${lineTopPosition}px` }} // Set the top position dynamically
            />
          </h2>
          {visibleParagraph === 4 && (
            <div>
              <p style={{width:'50%'}}>
              Yes. Our winery experts will tell you more about the varieties and help you choose the best option for you.
              </p>
            </div>
          )}
        </div>
        <img src={images.women} alt='women' className='image' />
      </div>
    </div>
  );
};

export default Quection;
