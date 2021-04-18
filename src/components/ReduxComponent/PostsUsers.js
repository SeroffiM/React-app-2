import React,{Component} from 'react'

class PostsUsers extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='page4-userPosts'>
        <input type='button' value='show all posts' onClick={this.props.onClick}/>
        <div className='page4-posts'>

        </div>
      </div>
    )
  }
}



export default PostsUsers

