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
      <AppBar position="static"   >
        <Toolbar variant="dense" className='Box'>
          <div className="Appbar_img">
            <img src="" alt="" />
          </div>
        <div className='Boxs'>
        <Button className='Iconbutton ' variant="contained">Login </Button>
        <Button variant="outlined">Sing up</Button>
        </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar; 