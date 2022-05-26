import * as React from 'react';

// Importation des modules MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

// importation du fichier de style
import './SideMenu.css';

// Définition du style pour la partie haute du menu
const DrawerHeader = styled('div')(
  () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }),
);

// Définition du style pour la partie basse du menu
const Drawer = styled(MuiDrawer)(
  () => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  }),
);

function SideMenu() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        // Propriété Mui permettant de modifier directement le style du composant
        PaperProps={{
          sx: {
            backgroundColor: '#121C2F',
          },
        }}
      >
        {/* Rendu de la partie haute du menu */}
        <DrawerHeader>
          <IconButton>
            <AccountCircleIcon style={{ color: '#CBCDD1' }} fontSize="large" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Rendu de la partie basse du menu */}
        <IconButton>
          <SettingsIcon style={{ color: '#CBCDD1' }} fontSize="large" />
        </IconButton>
      </Drawer>
    </Box>

  );
}

export default SideMenu;
