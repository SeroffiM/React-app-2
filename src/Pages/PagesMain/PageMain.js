import React from 'react';
import './PageMain.css'
import mainImg from '../../static/img/Arthas cropped.jpg'



const PageMain = () => {
  // console.log(props)
  return (
    <div className='page-main-container'>
      <h1 className='PageMain-h1'>Welcom to Hell!!!</h1>
      <div className ='img-wrapper'>
        <img src = {mainImg}/>
      </div>
    </div>
  )
}

export default PageMain