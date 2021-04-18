import React,{Component} from 'react'
import InputCurrency from "./InputCurrency";


class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueUsd: 1,
      valueRub: 1
    }

    this.changeUsd = this.changeUsd.bind(this)
    this.changeBel = this.changeBel.bind(this)
  }
  changeUsd(e){
    const valueUsd= e.target.value
    const valueRub = valueUsd*this.props.usd
    console.log(this.state)
    this.setState({valueUsd:valueUsd,valueRub:valueRub})
  }

  changeBel(e) {
    const valueBel = e.target.value

    const valueUsd = valueBel/this.props.usd

    this.setState({valueRub: valueBel,valueUsd:valueUsd})
  }

  componentDidMount() {
    this.setState({...this.state, valueRub: this.props.usd})
    console.log(this.props.usd)
  }


  render() {
    console.log(this.props)
    return(
      <div>

      <InputCurrency valueRub={this.state.valueRub} valueUsd={this.state.valueUsd} usd={this.props.usd} changeBel={this.changeBel} changeUsd={this.changeUsd}/>

      </div>
    )
  }
}

export default Calc