/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

// Importation des modules Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Importation des modules MUI
import AddIcon from '@mui/icons-material/Add';

// Importation des composants à afficher
import UserCard from '../UserCard/UserCard';

// Importation des fichiers de style
import './Carousel.css';
import 'swiper/swiper-bundle.css';

function Carousel() {
  // Création d'un state permettant de stocker tous les utilisateurs dans un tableau
  const [{ users }, setUsers] = useState({ users: [] });

  // Création des states permettant le stockage des données d'un utilisateur
  const [userPicture, setUserPicture] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userFirstname, setUserFirstname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userDob, setUserDob] = useState('');

  /* Fontion permettant d'ajouter une carte utilisateur dans le tableau users
  et de récupérer son nouvel état sans le spread operator un nouveau tableau sera
  généré à chaque fois */

  const addUser = async () => {
    // Récupération et stockage des données à partir de l'API
    const response = await axios.get('https://randomuser.me/api/');
    setUserPicture(response.data.results[0].picture.large);
    setUserFirstname(response.data.results[0].name.first);
    setUserLastname(response.data.results[0].name.last);
    setUserEmail(response.data.results[0].email);
    setUserDob((response.data.results[0].dob.date).slice(0, 10));
    // Je push un nouveau user dans le tableau users à chaque click
    users.push(
      <div>
        <UserCard
          Picture={userPicture}
          Lastname={userLastname}
          Firstname={userFirstname}
          Email={userEmail}
          Dob={userDob}
        />
      </div>,
    );
    setUsers({ users: [...users] });
  };

  return (
    <>
      {/* Conditionnement de l'affichage du Carousel en fonction du tableau users */}
      {users.length === 0
        ? (
          <div className="swiper-container">
            <div className="instruction">Please click on the below button to add new users !</div>
            <button type="button" onClick={addUser}>
              <AddIcon />
            </button>
          </div>
        )
        : (
          <div className="swiper-alt-container">
            <Swiper
              slidesPerView={4}
              spaceBetween={1}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                {/* Ajout de la fonction add user à l'écouteur d'évènement Onclick */}
                <button type="button" onClick={addUser}>
                  <AddIcon />
                </button>
              </SwiperSlide>
              {/* On map sur chaque itération du tableau user
              pour afficher dynamiquement les cards */}
              { users.map((user) => (
                <SwiperSlide key={uniqid()}>
                  {user}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
    </>
  );
}

export default Carousel;
