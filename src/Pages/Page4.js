
import React from 'react';
import './Page4.css'
import Header from "../components/Header/Header";
import Users from "../components/ReduxComponent/Users";
import PostsUsers from "../components/ReduxComponent/PostsUsers";


const Page4 = (props) => {
  return (
    <div className='page4-container-page'>
      <Header/>
      <div className='page4-mainContent'>
        <Users store={props.store} />
        <PostsUsers />
      </div>
    </div>
  )
}

export default Page4