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
    <div style={{backgroundColor:'rgb(65, 43, 21)'}}>
    <Quection/>
    <MainServices/>
    </div>
    <AboutUs/>
    <Footer />
  </div>
);

export default App;
