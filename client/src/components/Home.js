import React from "react";
import axios from "axios";
import Post from "./Post";
// import Posts from "./Posts";
import { Card, Header, Input, } from "semantic-ui-react";

class Home extends React.Component {
  state = { posts: [], visible: [], search: "", };

  componentDidMount() {
    axios.get("/api/posts")
      .then(res => {
        this.setState({ posts: res.data, visible: res.data, });
      })
      .catch( error => {
        console.log(error)
      })
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value }, () => {
      this.updateVisible()
    });
  }

  updateVisible = () => {
    const { search, posts } = this.state;
    if (search.length === 0)
      this.setState({ visible: posts });
    else if (search.length > 1) {
      axios.get(`/api/search?term=${search}`)
        .then( res => this.setState({ visible: res.data }) )
    }
  }

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
        <Input
          value={this.state.search}
          onChange={this.handleChange}
          icon={{ name: "search", circular: true}}
          placeholder="Search..." 
          />
          {/* <Posts posts={this.state.visible} /> */}
        <Card>
          {this.renderPosts()}
        </Card>
      </>
    )
  }
};



export default Home;



  

  
