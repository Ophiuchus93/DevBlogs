import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import axios from "axios";
import { Container, Segment, Header, Image, } from "semantic-ui-react";

class PostView extends React.Component {
  state = { post: {}, comments: [], }

  componentDidMount() {
    axios.get(`/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ post: res.data })
      })
      .catch(err => console.log(err))

    axios.get(`/api/posts/${this.props.match.params.id}/comments`)
      .then(res => {
        this.setState({ comments: res.data })
      })
      .catch(err => console.log(err))
  }

  renderComments = (props) => {
    const { comments } = this.state;
    if (comments.length <= 0)
      return <h3>No Comments</h3>
    return comments.map(comment =>
      <Comment key={comment.id} body={comment.body} deleteComment={this.deleteComment} comment={comment} />)
  }

  addComment = (comment) => {
    const { comments } = this.state;
    axios.post(`/api/posts/${this.state.post.id}/comments`, comment)
      .then(res => this.setState({ comments: [...comments, res.data] }))
  };

  deleteComment = (id) => {
    const { comments, post } = this.state;
    axios.delete(`/api/posts/${post.id}/comments/${id}`)
      .then(res => {
        this.setState({ comments: comments.filter(c => c.id !== id), })
      })
  }


  //   sample = () => {
  //     const { posts, } = this.state;
  //   if (posts.length) {
  //     const index = Math.floor(Math.random() * posts.length);
  //     return posts[index];
  //   } else {
  //     return null;
  //   }
  // };




  render() {
    const { title, body, image } = this.state.post;
    return (
      <div>
        <Segment>
          <div style={styles.image} >
            <Image src={image} />
          </div>
          <Header as="h1" textAlign="center"> {title} </Header>
          <hr />
          <br />
          <Container>
            <Segment>
              <p> {body} </p>
            </Segment>
          </Container>
          <br />
          <br />
          <br />
          <br />
          <CommentForm {...this.props} addComment={this.addComment} />
          <br />
          <Header as="h4">Comments:</Header>

          {this.renderComments()}

        </Segment>

      </div>
    );
  }
};

const styles = {
  image: {
    display: "flex",
    // border: "solid 2px blue",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em",
  }
}

export default PostView;