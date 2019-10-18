import React from "react";
import axios from "axios";
import Post from "./Post";
import { Container, Grid, Input, } from "semantic-ui-react";

class Home extends React.Component {
  state = { posts: [], search: "" };

  componentDidMount() {
    axios.get("/api/posts")
      .then(res => {
        this.setState({ posts: res.data, });
      })
      .catch(error => {
        console.log(error)
      })
  };

  renderPosts = () => {
    const { posts } = this.state;
    if (posts.length <= 0)
      return <h2>Currently no posts...</h2>
    return posts.map(post => <Post key={post.id} {...post} deletePost={this.deletePost} />)
  };

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
      .then(response => {
        const { posts, } = this.state;
        this.setState({ posts: posts.filter(p => p.id !== id), })
      })
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) })
  };

  renderPosts = () => {
    const { posts } = this.state;
    let filteredPosts = posts.filter(
      (post) => {
        return post.title.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );

    if (posts.length <= 0)
      return <h2>Currently no posts...</h2>
    return filteredPosts.map(post =>
      <Post
        key={post.id}
        {...post}
        deletePost={this.deletePost}
      />
    )
  };

  render() {
    return (
      <>
        <br />
        <Input
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          icon={{ name: "search" }}
          style={{ width: "400px" }}
          iconPosition="left"
          placeholder="Search..."
        />
        <Container style={{ margin: "10px", padding: "10px" }}>
          <Grid
            style={{ paddingLeft: "100px", paddingTop: "30px" }}
            columns={3}
            padded="vertically"
            divided
          >
            {this.renderPosts()}
          </Grid>
        </Container>
      </>
    );
  };
};

export default Home;






