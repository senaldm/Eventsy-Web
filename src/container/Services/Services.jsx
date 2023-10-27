import React, { useState } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { images } from '../../constants';

const Services = () => {
  const paragraphs = [
    '“I really like to please myself with good wine with a rich taste. Therefore, from time to time, I order wine directly from the CaliWines winery. I also buy Chardonnay and Cabernet  for family holidays. We are completely delighted with the amazing taste of these wines, which we want to enjoy endlessly.”',
    '“I really like to please myself with good wine with a rich taste. Therefore, from time to time, I order wine directly from the CaliWines winery. I also buy Chardonnay and Cabernet  for family holidays. We are completely delighted with the amazing taste of these wines, which we want to enjoy endlessly.”',
    '“I really like to please myself with good wine with a rich taste. Therefore, from time to time, I order wine directly from the CaliWines winery. I also buy Chardonnay and Cabernet  for family holidays. We are completely delighted with the amazing taste of these wines, which we want to enjoy endlessly.”',
  ];
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentParagraph((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (direction === 'right') {
      setCurrentParagraph((prev) => (prev < paragraphs.length - 1 ? prev + 1 : prev));
    }
  };

  return (
    <div className="services-container">
      <div className="service_wrapper">
      <div className="service_subheader">
          <h3>Testimonials</h3>
        </div>
        <div className="service_header">
          <h2 className='service'>What Our Customers Say</h2>
        </div>
       
        <div className="service_image">
          <img src={images.design}alt="Stylish Image" />
        </div>
        <div className="service_smallsubheader">
          <h4> Read some stories from our customers below.</h4>
        </div>
        <div className="service_paragraph">
          <span className='left-arrow' onClick={() => handleArrowClick('left')}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <p className='pargraph'>{paragraphs[currentParagraph]}</p>
          <span className='right-arrow' onClick={() => handleArrowClick('right')}>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
        <div className="dot-container">
          <span className={`dot ${currentParagraph === 0 ? 'active' : ''}`} />
          <span className={`dot ${currentParagraph === 1 ? 'active' : ''}`} />
          <span className={`dot ${currentParagraph === 2 ? 'active' : ''}`} />
        </div>
      </div>
    </div>
       
  );
};

export default Services;
