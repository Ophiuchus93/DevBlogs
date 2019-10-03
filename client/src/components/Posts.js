import React from "react";
import axios from "axios";
// import Post from "./Post";
import { AuthContext } from "../providers/AuthProvider";
import { Header, Card, Segment, Button, Image, Icon, } from "semantic-ui-react"

class Posts extends React.Component {
  state = { posts: [], currentUser: {}, };
  
  componentDidMount() {
    this.setState({currentUser: this.context.user })
    axios.get(`/api/users/${ this.state.currentUser.id }/posts`) 
    .then ( res => {
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
      return <h3>No Posts</h3> 
    return posts.map( post => (
      <Segment key={post.id}>
        <Card  >
            <Image 
              ui avatar image="true"
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png" 
              style={{backgroundColor: "#C4C6FF"}}
              />
          <Card.Content>
            <Card.Header>{ post.author }</Card.Header>
            <Card.Header textAlign="center" as="h3">{ post.title }</Card.Header>
            <Card.Meta>{ post.body }</Card.Meta>
            <Button
              icon basic
              color="red"
              size="tiny" 
              onClick={() => this.deletePost(post.id)}
              style={{ marginRight: "150px", }}
            >
            <Icon name="x" />
            </Button>
          </Card.Content>
        </Card>
      </Segment>
    ))
  }

  render() {
    return(
    <>
      <Header as="h1">My Posts</Header>
      <br />
      <Card>
        { this.renderPosts() }
      </Card>
    </>
    )
  }
}


Posts.contextType = AuthContext;
export default Posts;