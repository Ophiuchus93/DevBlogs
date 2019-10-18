import React from "react";
import axios from "axios";
import Post from "./Post"
import { AuthContext } from "../providers/AuthProvider";
// import { Link, } from "react-router-dom"
import { Card, Container, Grid, Header, } from "semantic-ui-react";

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
        <Header as="h1">My Posts</Header>
        <br />
       
       <Grid>
      <Grid.Row columns={3}>

              {/* <Card>
                <Card.Content> */}
                  {this.renderPosts()}
                {/* </Card.Content>
              </Card> */}
      </Grid.Row>
       </Grid>
         </>
     
    )
  }
}

Posts.contextType = AuthContext;
export default Posts;
