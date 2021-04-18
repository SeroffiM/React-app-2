import React from 'react';
import './Page3.css'
import Header from "../components/Header/Header";
import USD_NBRB from "../components/USD/USD_NBRB";
import {connect} from "react-redux";
import {getCurrency} from "../redux/actionCreators";


const Page3 = (props) => {
  console.log(props)
  return (
    <div className='page3-container-page' onLoad={props.getCurrency}>
      <Header/>
      <USD_NBRB date={props.date} usd={props.usd} getCurrency={getCurrency}/>
    </div>
  )
}

const mapStateToProps = state => ({
  usd: state.todos.usd,
  date: state.todos.date
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrency: () => dispatch(getCurrency())
  }
}

const Page3Container = connect(mapStateToProps, mapDispatchToProps)(Page3)

export default Page3Container