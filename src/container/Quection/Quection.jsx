import React, { useState } from 'react';
import './Quection.css';
import { images } from '../../constants';

const Quection = () => {
  const [visibleParagraph, setVisibleParagraph] = useState(-1);
  const [lineTopPosition, setLineTopPosition] = useState(50); // Initial line position

  const toggleParagraph = (index) => {
    if (index === visibleParagraph) {
      setVisibleParagraph(-1);
      setLineTopPosition(30); // Reset line position when hiding the paragraph
    } else {
      setVisibleParagraph(index);
      setLineTopPosition(120); // Adjust to the desired position when showing the paragraph
    }
  };

  return (
    <div id="faq">
      <div className='second_container'>
        <div className='subheading'>
          <h3 class='faq'>FAQ</h3>
        </div>
        <div className='heading'>
          <h1 className='quection_header'>Have a Question?</h1>
        </div>
        <div>
          <img className='image' src={images.design} alt="Stylish Image" />
        </div>
        <div className='quection_and_answers'>
          <h2 style={{ paddingBottom: '60px' }}>
            <span className='span'onClick={() => toggleParagraph(1)}>
             How to Create tickets? {visibleParagraph === 1 ? '−' : '+'}
            </span>
            <hr
              className={visibleParagraph === 1 ? 'active' : ''}
              style={{ top: `${lineTopPosition}px`,border:'0.3px solid white'}} // Set the top position dynamically
            />
          </h2>
          {visibleParagraph === 1 && (
            <div>
              <p className='answer'style={{width:'50%',paddingBottom:'50px',marginTop:'-50px'}}>
               Just navigate to ticket bar then fill the form and make you own ticket.
              </p>
            </div>
          )}

          {/* Create the desired space between h2 and hr elements */}
          

          {/* Repeat the same pattern for other questions */}
          {/* Add padding-bottom to h2 for additional space between hr and paragraphs */}
          <h2 style={{ paddingBottom: '60px' }}>
            <span onClick={() => toggleParagraph(2)}>
             How to Validate tickets? {visibleParagraph === 2 ? '−' : '+'}
            </span>
            <hr
              className={visibleParagraph === 2 ? 'active' : ''}
              style={{ top: `${lineTopPosition}px`, }} // Set the top position dynamically
            />
          </h2>
          {visibleParagraph === 2 && (
            <div>
              <p className='answer' style={{width:'50%',paddingBottom:'50px',marginTop:'-50px'}}>
               You have to download our mobile app and validate tickets with users varification code send that to you.
              </p>
            </div>
          )}
           <h2 style={{ paddingBottom: '60px' }}>
            <span onClick={() => toggleParagraph(3)}>
           Is this a free service? {visibleParagraph === 3 ? '−' : '+'}
            </span>
            <hr
              className={visibleParagraph === 3 ? 'active' : ''}
              style={{ top: `${lineTopPosition}px` }} // Set the top position dynamically
            />
          </h2>
          {visibleParagraph === 3 && (
            <div>
              <p className='answer' style={{width:'50%',paddingBottom:'50px',marginTop:'-50px'}}>
            
            Eventsy is a fully free system make for you.
              </p>
            </div>
          )}
           <h2 style={{ paddingBottom: '60px' }}>
            <span onClick={() => toggleParagraph(4)}>
            How to contact event planners? {visibleParagraph === 4 ? '−' : '+'}
            </span>
            <hr
              className={visibleParagraph === 4 ? 'active' : ''}
              style={{ top: `${lineTopPosition}px` }} // Set the top position dynamically
            />
          </h2>
          {visibleParagraph === 4 && (
            <div>
                            <p className='answer' style={{width:'50%',paddingBottom:'50px',marginTop:'-50px'}}>

             In the mobile app navigate to vendors tap try to figure out to find suitable person for you with request.
              </p>
            </div>
          )}
        </div>
        <img src={images.women} alt='women' className='image2' />
      </div>
    </div>
  );
};

export default Quection;
