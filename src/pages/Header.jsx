import React from 'react'
// import { AppBar} from '@mui/material'
import "../css/header.css"
// import Toolbar from '@mui/material'
// import Box from '@mui/material'
import heders from "../img/headerImg.svg"
const Header = () => {







  return (
    <>
        <header className='AppBar'>


          <div className="header_text">
            <h1 className='h3'>
            orzu jamoalari
            shu yerda yaratilgan
            </h1>
            <p className='p'>
            ta'lim sohasida ish va xodimlarni topish bo'yicha yordamchi
            </p>
            <button className='heder_btn'>
              Batafsil 
            </button>
          </div>


              <div className="header_img">
                <img src={heders} alt="" />
              </div>
        </header>
    </>
  )
}

export default Header