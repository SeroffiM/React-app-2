import React,{Component} from 'react'


class InputCurrency extends Component {
  constructor(props) {
    super(props);
  }



  render() {


    return(

      <div>
        <label>Bel</label> <input type='text' placeholder='введите руб.'  onChange={this.props.changeBel} value={this.props.valueRub} />
        <label>Usd</label> <input type='text' placeholder='введите usd'  onChange={this.props.changeUsd} value={this.props.valueUsd} />

      </div>
    )
  }
}

export default InputCurrency