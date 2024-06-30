import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import  "../css/navbar.css" 
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <>
      <Box   sx={{ flexGrow: 1 }}>
      <AppBar position="static"  >
        <Toolbar variant="dense" className='Box'>
        
          <Button className='Iconbutton' variant="contained">login </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar; 