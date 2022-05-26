import React, { useState } from 'react';

// import AddIcon from '@mui/icons-material/Add';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';
// import AddUserButton from '../AddUserButton/AddUserButton';
import UserCard from '../UserCard/UserCard';

// import style
import './Carousel.css';
import 'swiper/swiper-bundle.css';

function Carousel() {
  // Define AddButton action on clic

  const [{ users }, setUsers] = useState({ users: [] });

  const addUser = () => {
    users.push(<div key={users.length}><UserCard /></div>);
    setUsers({ users: [...users] });
  };

  return (
    <div className="swiper-container">
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
            Add
          </button>
        </SwiperSlide>
        { users.map((user) => (
          <SwiperSlide>
            {user}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
