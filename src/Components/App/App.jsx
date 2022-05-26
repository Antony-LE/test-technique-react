import React from 'react';

import SideMenu from '../SideMenu/SideMenu';
import MainChart from '../MainChart/MainChart';
import Carousel from '../Carousel/Carousel';

import './App.css';

import Logo from '../../Assets/logo.png';

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt={Logo} />
      <MainChart />
      <Carousel />
      <SideMenu />
    </div>
  );
}

export default App;
