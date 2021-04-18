import React,{Component} from 'react'
import Calc from "./Calc";
import {connect} from "react-redux";








class USD_NBRB extends Component{
  constructor(props) {
    super(props);

  }



  render() {
    console.log(this.props)
    return(
      <div>
        <p>Курс доллара НБРБ на дату  <strong>{this.props.date} {this.props.usd} </strong> </p>
        <Calc usd={this.props.usd} getCurrency={this.props.getCurrency}/>
      </div>
    )
  }
}



export default USD_NBRB