import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './UserCard.css';

function UserCard() {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 280, maxHeight: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
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
