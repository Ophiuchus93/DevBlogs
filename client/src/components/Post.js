import React from "react";
import axios from "axios";
import { Header, Segment, Button, } from "semantic-ui-react";

class Post extends React.Component {
  state ={ post: {}, };

  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`)
    .then ( res => {
      this.setState({ post: res.data });
    })
  }


  render() {
    const { title, body, } = this.state.post
    return(
      <div>
        <Segment>
          <Header as="h1">{ title }</Header>
        </Segment>
        <br />
        <Segment>
          <p>{ body }</p>
          
        </Segment>
      </div>
    )
  }
}

export default Post;