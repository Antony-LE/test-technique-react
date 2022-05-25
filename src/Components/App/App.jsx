import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import './App.css';
import Logo from '../../Assets/logo.png';

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt={Logo} />
      <SideMenu />
    </div>
  );
}

export default App;
