import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './UserCard.css';

import axios from 'axios';

function UserCard() {
  // const [userPicture, setUserPicture] = useState('');
  // const [userLastname, setUserLastname] = useState('');
  // const [userFirstname, setUserFirstname] = useState('');
  // const [userEmail, setUserEmail] = useState('');
  // const [userDob, setUserDob] = useState('');

  axios.get('https://randomuser.me/api/').then((response) => {
    // return setUserPicture(response.data);
    console.log(response.data.results[0].picture);
    console.log(response.data.results[0].email);
    console.log(response.data.results[0].dob.date);
    console.log(response.data.results[0].name.first);
    console.log(response.data.results[0].name.last);
  });

  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 280, maxHeight: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            // image={userPicture}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nom
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Prénom
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Numéro de téléphone
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default UserCard;
