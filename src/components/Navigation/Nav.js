import './Nav.css'
import React from 'react';
import ItemList from "./ItemList";



const Nav = (props) => {
  return (
    <div className='container-nav'>
      <nav className='menu-nav'>
              <h1>ITEC education</h1>
              <ItemList props={props.props}/>
      </nav>
    </div>
  )
}

export default Nav