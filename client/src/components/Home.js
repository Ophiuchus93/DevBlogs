import React from "react";
import axios from "axios";
import Post from "./Post";
import { Header, Card, } from "semantic-ui-react";

class Home extends React.Component {
  state = { posts: [], };

  componentDidMount() {
    axios.get("/api/posts")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch( error => {
        console.log(error)
      })
  };

  renderPosts = () => {
    const {posts} = this.state;

    if(posts.length <= 0)
      return <h2>Currently no posts...</h2>
      return posts.map( post => <Post key={post.id} {...post} />)

  };
  render() {
    return (
      <>
        <Header as="h1"></Header>
        <br />
        <Card>
          {this.renderPosts()}
        </Card>
      </>
    )
  }
};



export default Home;