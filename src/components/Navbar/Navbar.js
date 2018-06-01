import React from 'react'
import './Navbar.css'
import './../../fontawesome/web-fonts-with-css/css/fontawesome-all.min.css'

import Icons from "./Icons/Icons";

const navBar = (props) => ( 
   <nav className="Navbar" >
      <Icons />
      <div className="Name">Pavol Halás</div>
      <div className="Blog"> <a href="">blog</a> </div>
   </nav>
)

export default navBar