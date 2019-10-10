import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import axios from "axios";
import { Card, Container, Segment, Header, } from "semantic-ui-react";

class PostView extends React.Component {
  state = { post: {}, comments: [], }

  componentDidMount() {
    axios.get(`/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ post: res.data })
      })
      .catch(err => console.log(err))


  renderComments = () => {
    const { comments } = this.state;
    if (comments.length <= 0)
      return <h3>No Comments</h3>
    return comments.map(comment =>
      <Comment key={comment.id} body={comment.body} />)
  }

  addComment = (comment) => {
    const { comments } = this.state
    axios.post(`/api/posts/${this.state.post.id}/comments`, comment)
      .then( res => this.setState({ comments: [...comments ,res.data] }))
  }

  render() {
    const { title, body, } = this.state.post;
    return (
      <div>
        <Segment>
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
          <CommentForm {...this.props} addComment={this.addComment}/>
          <br />
          <Header as="h4">Comments:</Header>
          <Segment>
            {this.renderComments()}
          </Segment>
        </Segment>
      </div>
    );
  };
};

export default PostView;