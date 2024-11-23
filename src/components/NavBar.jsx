import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const NavBar = () => {
  return (
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5'>
            <PhotoLibraryIcon />
            ImageFinder
          </Typography>
        </Toolbar>      
      </AppBar>
  )
}
export default NavBar;
