import React from 'react';
import './Page.css'
import Header from "../components/Header/Header";
import PageMain from './PagesMain/PageMain';




const Page = () => {
  // console.log(props)
  return (
    <div className='page-container'>
      <Header/>
      <PageMain/>
      {/*<PageMain/>*/}
      {/*<PageFooter/>*/}

    </div>
  )
}

export default Page