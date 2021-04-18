import React from 'react'
import './Header.css'
import logo from '../../static/img/logo.png'



function Header(){
  return(
    <header className='header'>
      <div className='header-logo'>
        <img src={logo} alt=''/>
      </div>
      <div className='header-contacts'>
        <p><strong>Tel:</strong>+375(29)800-00-00</p>
        <p><strong>Email:</strong>React@my.by</p>
      </div>
    </header>
  )
}


export default Header