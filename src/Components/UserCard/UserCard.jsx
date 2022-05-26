/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// Importation des modules MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import Divider from '@mui/material/Divider';

// importation du fichier de style
import './UserCard.css';

function UserCard({
  // Props récupérées dans le composant parent Carousel
  Picture, Lastname, Firstname, Email, Dob,
}) {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 300, maxHeight: 345 }}>
        <img src={Picture} alt={Picture} />
        <CardContent>
          <Typography gutterBottom variant="h12" component="div">
            {Lastname}
          </Typography>
          <Typography gutterBottom variant="h12" color="text.secondary">
            {Firstname}
          </Typography>
          <Divider />
          <Typography variant="body2" fontSize="small" color="text.secondary">
            <EmailIcon fontSize="small" />
            <br />
            {Email}
          </Typography>
          <Divider />
          <Typography variant="body2" fontSize="small" color="text.secondary">
            <CakeIcon fontSize="small" />
            <br />
            {Dob}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

UserCard.propTypes = {
  Picture: PropTypes.string,
  Lastname: PropTypes.string,
  Firstname: PropTypes.string,
  Email: PropTypes.string,
  Dob: PropTypes.string,
};

UserCard.defaultProps = {
  Picture: '',
  Lastname: '',
  Firstname: '',
  Email: '',
  Dob: '',
};

export default UserCard;
