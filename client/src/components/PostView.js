import React from "react";
import axios from "axios";
import { Segment, Header, Button, Card } from "semantic-ui-react"
// import { Link } from "react-router-dom"

class PostView extends React.Component {
  state={ post: {}}

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.user_id}/posts/this.props.match.params.id`)
    .then ( res => {
      this.setState({ post: res.data })
    })
    .catch (err => console.log(err))
  }

  render() {
    const { title, body, }
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