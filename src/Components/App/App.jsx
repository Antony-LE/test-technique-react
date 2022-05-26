import React from 'react';

// Importation des composants à afficher
import SideMenu from '../SideMenu/SideMenu';
import MainChart from '../MainChart/MainChart';
import Carousel from '../Carousel/Carousel';

// Importation du fichier de style
import './App.css';

// Importation de l'asset Logo
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
