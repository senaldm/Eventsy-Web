import React from 'react';
import { AboutUs, Vision, FindUs, Footer, Quection, Header, Services, SpecialMenu,MainServices } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className='background-container' >
    <div className='main-image'>
      <Navbar />
      <Header />
      </div>
      <div className='background-specialmenu'>
      <SpecialMenu />
      </div>
      <Vision />
    <Services />
    <div style={{backgroundColor: ' #1c1c1c'}}>
    <Quection/>
    <MainServices/>
    </div>
    <AboutUs/>
    <Footer />
  </div>
);

export default App;
