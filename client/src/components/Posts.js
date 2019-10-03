import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Card, Grid, Header, Segment } from "semantic-ui-react";

class Posts extends React.Component {
  state = { posts: [], currentUser: {}, };

  componentDidMount() {
    this.setState({ currentUser: this.context.user })
    axios.get(`/api/users/${this.state.currentUser.id}/posts`)
      .then(res => {
        this.setState({ posts: res.data });
      })
  }

  renderPosts = (id) => {
    const { posts } = this.state;

    if (posts.length <= 0)
      return <h2>No Posts To See</h2>
    return posts.map(post => (
      <Segment key={post.id}>
        <Card>
          <Card.Content>
            <Card.Header as="h3">{post.title}</Card.Header>
            {post.body}
          </Card.Content>
        </Card>
        <Button
          as={Link} to={"/new"}
          color="yellow">
          Edit
          </Button>
      </Segment>
    ))
  }

  render() {
    return (
      <>
        <Header as="h1">My Posts</Header>
        <br />
        <Card>
          {this.renderPosts()}
        </Card>
      </>
    )
  }
}
Posts.contextType = AuthContext;
export default Posts;