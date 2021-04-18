import React from 'react';
import './Page2.css'
import Header from "../components/Header/Header";
import ContactForm from "../components/Contact/ContactForm";




const Page2 = () => {
  return (
    <div className='page-container'>
      <Header/>
      <ContactForm/>
    </div>

  )
}

export default Page2