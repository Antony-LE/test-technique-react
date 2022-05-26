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
  // fonctions permettant de récupérer la date et l'heure
  const today = new Date();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const date = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
  const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  return (
    <div className="App">
      <img className="logo" src={Logo} alt={Logo} />
      <div className="time">
        <div className="date">{date}</div>
        <div className="hour">{hour}</div>
      </div>
      <MainChart />
      <Carousel />
      <SideMenu />
    </div>
  );
}

export default App;
