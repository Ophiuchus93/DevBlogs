import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import Like from "./Like";
import axios from "axios";
import { Card, Container, } from "react-bootstrap";

class PostView extends React.Component {
  state = { post: {}, comments: [], };

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
  };

  renderComments = (props) => {
    const { comments } = this.state;
    if (comments.length <= 0)
      return <h3>No Comments</h3>
    return comments.map(comment =>
      <Comment key={comment.id} body={comment.body} deleteComment={this.deleteComment} comment={comment} />)
  };

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
  };

  render() {
    const { title, body, image } = this.state.post;
    return (

      <Container>
        <Card bg="light" >
          <Card.Img src={image} style={styles.image} />
          <Card.Body>
            <Card.Title as="h3" className="text-center">{title}</Card.Title>
            <hr />
            <Card.Text>{body}</Card.Text>
          </Card.Body>
          <Card.Footer bg="light">

            <Like />
            <br />
            <CommentForm {...this.props} addComment={this.addComment} />
          </Card.Footer>
        </Card>
        <br />
        <br />
        <Card.Title as="h4">Comments:</Card.Title>

        {this.renderComments()}
      </Container>
    );
  }
};

// const styles = {
//   image: {
//     display: "flex",
//     // border: "solid 2px blue",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "2em",
//   }
// }

const styles = {

  image: {

    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "400px",
    width: "800px",
  }
};

export default PostView;
