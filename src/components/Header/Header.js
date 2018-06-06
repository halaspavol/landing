import React from 'react'
import './Header.css'
import './../../assets/img/bg.png'
import Navbar from './../Navbar/Navbar'
 
const headerBg = (props) => (
   <div className="Header">
      <Navbar scroll={props.scroll}/>
   </div>
)

export default headerBg