import React from 'react';
import { Card, } from 'semantic-ui-react';
import { Link, } from "react-router-dom";
import { AuthConsumer, } from "../providers/AuthProvider";
// import axios from "axios"


class Comment extends React.Component {
  state = { body: ""};




  render() {
    const { body } = this.props;
    return (


      <Card style={styles.comments}>
        <Card.Content> {body} </Card.Content>
        <Link onClick={() => this.props.deleteComment(this.props.comment.id)}>
          Delete
        </Link>
      </Card>

    )
  }
}


const styles = {

  comments: {
    background: "#f2f2f2",
  }
}
export default Comment;