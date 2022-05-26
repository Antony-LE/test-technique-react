import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Importation des modules MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import Divider from '@mui/material/Divider';

// importation du fichier de style
import './UserCard.css';

function UserCard() {
  // Création des states permettant le stockage des données d'un utilisateur
  const [userPicture, setUserPicture] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userFirstname, setUserFirstname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userDob, setUserDob] = useState('');

  // Requête axios permettant de recevoir aléatoirement les données d'un utlisateur
  const getUserData = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    setUserPicture(response.data.results[0].picture.large);
    setUserFirstname(response.data.results[0].name.first);
    setUserLastname(response.data.results[0].name.last);
    setUserEmail(response.data.results[0].email);
    setUserDob((response.data.results[0].dob.date).slice(0, 10));
  };

  /* J'utilise un useEffect pour éviter que les données de la card ne se
   raffraichissent en continue */
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 300, maxHeight: 345 }}>
        <img src={userPicture} alt={userPicture} />
        <CardContent>
          <Typography gutterBottom variant="h12" component="div">
            {userLastname}
          </Typography>
          <Typography gutterBottom variant="h12" color="text.secondary">
            {userFirstname}
          </Typography>
          <Divider />
          <Typography variant="body2" fontSize="small" color="text.secondary">
            <p>
              <EmailIcon fontSize="small" />
              <br />
              {userEmail}
            </p>
          </Typography>
          <Divider />
          <Typography variant="body2" fontSize="small" color="text.secondary">
            <p>
              <CakeIcon fontSize="small" />
              <br />
              {userDob}
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserCard;
