import React from 'react';
import './App.css';
import NavBar from "./components/Navigation/Nav";
import {Route, Switch} from "react-router";
import Page1 from "./Pages/Page1";
import Page4 from "./Pages/Page4";
import Page3 from "./Pages/Page3";
import Page from "./Pages/Page";
import Page2 from "./Pages/Page2.jsx";



const App = (props) => {
  return (
    <div className='mlm'>
      <div className='app'>
        <NavBar props = {props.props}/>
      </div>
      <div className="main">
        <Switch>
          <Route exact path='/' render={()=><Page/>}></Route>
          <Route exact path='/about' component={Page1}></Route>
          <Route exact path='/contact' render={()=><Page2/>}></Route>
          <Route exact path='/price' render={()=><Page3/>}></Route>
          <Route exact path='/metall' render={()=><Page4 store={props.store} />}></Route>
        </Switch>
      </div>
    </div>
  );
}






export default App;
