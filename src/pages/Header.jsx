import React from 'react'
// import { AppBar} from '@mui/material'
import "../css/header.css"
// import Toolbar from '@mui/material'
// import Box from '@mui/material'
import heders from "../img/headerImg.svg"
const Header = () => {


  const h3 = {
     width: "400px",
     fontfamil: "san-serif",
     marginTop : "100px",
     marginLeft: "80px",
  } 


  const p = {
    width: "350px", 
    color: "rgb(110, 106, 106)",
    marginLeft: "80px",
  }


  return (
    <>
        <header className='AppBar'>


          <div className="header_text">
            <h1 style={h3}>
            orzu jamoalari
            shu yerda yaratilgan
            </h1>
            <p style={p}>
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