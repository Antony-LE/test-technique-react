/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';

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

  /* Fontion permettant d'ajouter une carte utilisateur dans le tableau users
  et de récupérer son nouvel état sans le spread operator un nouveau tableau sera
  généré à chaque fois */
  const addUser = () => {
    users.push(<div key={users.length}><UserCard /></div>);
    setUsers({ users: [...users] });
  };

  return (
    <>
      {users.length === 0
        ? (
          <div className="swiper-container">
            <SwiperSlide>
              <div className="instruction">Please push on the below button to add new user !</div>
              <button type="button" onClick={addUser}>
                <AddIcon />
              </button>
            </SwiperSlide>
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
                <button type="button" onClick={addUser}>
                  <AddIcon />
                </button>
              </SwiperSlide>
              { users.map((user) => (
                <SwiperSlide>
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
