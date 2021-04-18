import React,{Component} from 'react';
import './ContactForm.css'


class ContactForm extends Component{
  constructor(props) {
    super(props)
    this.state={
      count: 0
    }
    this.inputLoginRef = React.createRef()
    this.inputPasswordRef = React.createRef()
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }


  onChange(event){
    this.setState({count:this.inputLoginRef.current.value})
    // console.log(this.inputLoginRef.current)
    // console.log(this.inputPasswordRef.current)
  }
  onClick(event){
    console.log(event.target.value)
    console.log(this.inputLoginRef)
    console.log(this.inputLoginRef.current)
  }
  render() {
    return (
      <div className='contact-container'>
        <form>
          <input ref={this.inputLoginRef} type='text' onChange={this.onChange}/><br/>
          <input ref={this.inputPasswordRef} type='password' onChange={this.onChange}/><br/>
          <input type='button' value='ok' onClick={this.onClick}/>
        </form>

        <div>
          <strong>{this.state.count}</strong>
        </div>
      </div>
    )
  }
}

export default ContactForm