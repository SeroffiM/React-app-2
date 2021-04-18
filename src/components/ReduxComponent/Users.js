import React, {Component} from 'react'
import {connect} from "react-redux";
import {getUsers} from "../../redux/actionCreators";


class Users extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(1)
    return (
      <div>
        <div>All users:</div>
        <input type='button' value='get Users' onClick={this.props.onClick}/>
        <div>
          {this.props.users.map((item)=><p key={item.id} > {item.name}  </p>)}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    users:state.users
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(getUsers())
})

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)


export default UsersContainer