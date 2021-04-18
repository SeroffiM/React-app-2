import React from 'react'
import {NavLink} from "react-router-dom";

function ItemList(props){
  return(
    <ul className='nav-ul'>
      {props.props.map((item)=>
        <li key={item.id}><NavLink to={item.url}>{item.text}</NavLink></li>
      )}
    </ul>
  )
}

export default ItemList
