import React from "react";
import axios from "axios";
import Post from "./Post";
import { Input, } from "semantic-ui-react";
import { Card, CardDeck, CardColumns, } from "react-bootstrap";
import Like from "./Like";
// import { Card, Container, Grid, Header, Input, } from "semantic-ui-react";
import '../App.css';

class Home extends React.Component {
  state = { posts: [], search: "", };

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
    return posts.map(post =>
      <Post key={post.id}
        {...post}
        deletePost={this.deletePost}
      />
    )
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
          type="text" 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          icon={{ name: "search" }}
          style={{ width: "400px", color: "indigo", outlineColor: 'none'}}
          iconPosition="left"
          placeholder="Search..."
        /> 
        {/* <div style={styles.container}> */}
          <CardColumns>
            <Card>
              <Like />
              {/* <Grid.Row style={styles.test} columns={3}> */}

              {/* <Card style={styles.testTwo}> */}
                {this.renderPosts()}
              {/* </Card> */}
              {/* </Grid.Row> */}
            </Card>
          </CardColumns>
        {/* </div> */}
      </>
    );
  };
};

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: "50px",
//     // height: "50px",
//     width: "500px"
//   },
//   test: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly'
//   },
//   testTwo: {
//     border: "solid 2px blue",
//   }
// }


export default Home;


//  ----- THIS IS THE MOST RECENT ==============


