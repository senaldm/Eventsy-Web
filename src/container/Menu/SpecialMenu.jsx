import React from 'react';
import { images } from '../../constants';
import './SpecialMenu.css';

const menuItems = [
  {
    imgSrc: images.ticket,
    alt: 'Invitation 1',
    header: 'Create Own Secure Tickets',
    subheader: 'We Have a great collection of exclusive reserve',
    buttonLabel: 'Learn more',
  },
  {
    imgSrc: images.ticket_val,
    alt: 'Invitation 2',
    header: 'Validate Tickets with QR',
    subheader: 'Delicious description for item',
    buttonLabel: 'Learn more',
  },
  {
    imgSrc: images.invitation,
    alt: 'Invitation 3',
    header: 'Have valuable Invitations',
    subheader: 'Delicious description for item',
    buttonLabel: 'Learn more',
  },
];

const SpecialMenu = () => (
  <div className='app_specialmenu app_bg flex_center section_padding'>
    <div className='app_specialmenu-overlay flex_center'>
      {menuItems.map((item, index) => (
        <div key={index} className='menu-item'>
          <div className='menu-item-image-container'>

            <img src={item.imgSrc} alt={item.alt}  style={{width:'350px',height:'450px'}}/>
            <div className='menu-item-text'>
              <h2 className='menu-item-header' style={{width:'100%',paddingRight:'25px'}}>{item.header}</h2>

          

              <p className='menu-item-subheader'>{item.subheader}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SpecialMenu;
