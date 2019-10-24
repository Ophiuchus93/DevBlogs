import React from 'react';
// import { Card, } from 'semantic-ui-react';
import {  Card, } from "react-bootstrap";
import { Link, } from "react-router-dom";
import Like from "./Like";
// import axios from "axios"


class Comment extends React.Component {
  state = { body: ""};




  render() {
    const { body } = this.props;
    return (

      <Card style={styles.comments} padding="20px">
        <Card.Body>{body}</Card.Body>
        <Like />
        <br />
        <Link onClick={() => this.props.deleteComment(this.props.comment.id)}>
          Delete
        </Link>
      </Card>

      // <Card style={styles.comments}>
      //   <Card.Content> {body} </Card.Content>
      //   <Like />
      //   <Link onClick={() => this.props.deleteComment(this.props.comment.id)}>
      //     Delete
      //   </Link>
      // </Card>

    )
  }
}


const styles = {

  comments: {
    background: "#f2f2f2",
  }
};

export default Comment;