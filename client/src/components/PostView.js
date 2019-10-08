import React from "react";
import axios from "axios";
import { Segment, Header, } from "semantic-ui-react"

class PostView extends React.Component {
  state={ post: {}, }

  componentDidMount() {
    axios.get(`/posts/${this.props.match.params.id}`)
    .then ( res => {
      this.setState({ post: res.data })
    })
    .catch (err => console.log(err))
  }

  render() {
    const { title, body, } = this.state.post;
    return(
        <div>
          <Segment>
            <Header as="h1"> { title } </Header>
            <p> { body } </p>
          </Segment>
        </div>
    );
  };
};

export default PostView;