import React from "react";
import axios from "axios";
import Post from "./Post"
import { AuthContext } from "../providers/AuthProvider";
import { Link, } from "react-router-dom"
import { Button, Card, Header, } from "semantic-ui-react";

class Posts extends React.Component {
  state = { posts: [], currentUser: {}, };

  componentDidMount() {
    this.setState({ currentUser: this.context.user })
    axios.get(`/api/users/${this.state.currentUser.id}/posts`)
      .then(res => {
        this.setState({ posts: res.data });
      })
  }

  deletePost = (id) => {
    axios.delete(`/api/users/:user_id/posts/${id}`)
      .then( response => {
        const { posts, } = this.state;
        this.setState({ posts: posts.filter(p => p.id !== id), })
      })
  }

  renderPosts = () => {
    const { posts } = this.state;

    if (posts.length <= 0)
      return <h2>No Posts To See</h2>
      return posts.map( post => 
      <Post key={post.id} 
         {...post } 
          currentUser
          deletePost={this.deletePost} 
      />)
  }

  render() {
    const { posts, } = this.state;
    return (
      <>
        <Header as="h1">My Posts</Header>
        <br />
        <Card>
          <Card.Content>
          {this.renderPosts()}
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} color="green" to={`/api/users/${this.state.currentUser.id}/posts/${this.state.id}`}>View Post</Button>
          </Card.Content>
        </Card>
      </>
    )
  }
}
Posts.contextType = AuthContext;
export default Posts;