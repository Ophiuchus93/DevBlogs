import React from "react";
import { Link, } from "react-router-dom";
<<<<<<< HEAD
import {  Button, Card, Icon, Segment,  } from "semantic-ui-react";

const Post = (props) => {
  return (
    <Segment key={props.id}>
=======
import { Card, Button, Icon, Segment } from "semantic-ui-react";

const Post = (props) => {
  return (
    <Segment>
>>>>>>> 0c997e248c676ef773e25cc72fe8856c3fcf0c0e
        <Card>
          <Card.Content>
            <Card.Header as="h2" textAlign="right">{props.title}</Card.Header>
            <hr/>
            <Card.Meta>{props.body}</Card.Meta>
            <br/>
            <br/>
        <Button
          icon basic
          as={Link} to={"/form"}
          color="yellow"
          size="medium"
          >
          <Icon name="pencil alternate" />
          </Button>
        <Button
        icon basic
        color="red"
        size="medium"
        onClick={() => props.deletePost(props.id)}
        >
        <Icon name="x" />
        </Button>
          </Card.Content>
        </Card>
      </Segment>
<<<<<<< HEAD
=======

>>>>>>> 0c997e248c676ef773e25cc72fe8856c3fcf0c0e
  )
}

export default Post;