import React from 'react';

import SideMenu from '../SideMenu/SideMenu';
import ApexChart from '../ApexChart/ApexChart';

import './App.css';

import Logo from '../../Assets/logo.png';

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt={Logo} />
      <ApexChart />
      <SideMenu />
    </div>
  );
}

export default App;
