import React from "react";
import axios from "axios";
import Post from "./Post"
import { AuthContext } from "../providers/AuthProvider";
// import { Link, } from "react-router-dom"
import { Container, Grid, Header, } from "semantic-ui-react";

class Posts extends React.Component {
  state = { posts: [], };

  componentDidMount() {
    axios.get(`/api/posts`)
      .then(res => {
        this.setState({ posts: res.data });
      })
  }

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
      .then(response => {
        const { posts, } = this.state;
        this.setState({ posts: posts.filter(p => p.id !== id), })
      })
  }

  renderPosts = () => {
    const { posts } = this.state;

    if (posts.length <= 0)
      return <h2>No Posts To See</h2>
    return posts.map(post =>
      <Post key={post.id}
        {...post}
        currentUser
        deletePost={this.deletePost}
      />)

  }

  render() {
    return (
      <>
        <Container>

          <Header as="h1">My Posts</Header>
          <br />
          <Grid columns={3}
          >
            <Grid.Row >
              <Grid.Column>
                {this.renderPosts()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    )
  }
}

Posts.contextType = AuthContext;
export default Posts;
