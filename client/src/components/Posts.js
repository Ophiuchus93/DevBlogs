import React from "react";
import axios from "axios";
import PostDropDown from "./PostDropDown"
import { AuthContext } from "../providers/AuthProvider";
import { Input, } from "semantic-ui-react";
import { Card, CardDeck } from "react-bootstrap"

class Posts extends React.Component {
  state = { posts: [], search: "" };

  componentDidMount() {
    axios.get(`/api/posts`)
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(error => {
        console.log(error)
      })
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
    )
    if (posts.length <= 0)
      return <h2>Currently no posts...</h2>
    return filteredPosts.map(post =>
      <PostDropDown
        key={post.id}
        {...post}
        currentUser
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
          style={{ width: "400px", color: "indigo" }}
          iconPosition="left"
          placeholder="Search..."
          
        /> 
        <br />
        <br />
        <br />
      <Card>
        <CardDeck>
          {this.renderPosts()}
        </CardDeck>
      </Card>
      </>
    );
  };
};

Posts.contextType = AuthContext;
export default Posts;
