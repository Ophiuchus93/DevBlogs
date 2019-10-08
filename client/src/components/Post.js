import React from "react";
import { Link, } from "react-router-dom";
import { Card, Button, Icon, Segment } from "semantic-ui-react";
// import PostView from "./PostView";

const Post = (props) => {

  return (
    <Segment>
      <Card>
        <Card.Content>
          <Card.Header as="h2" textAlign="right">{props.title}</Card.Header>
          <hr />
          <Card.Meta>{props.body}</Card.Meta>
          <br />
          <br />
          <Button 
          icon basic
          as={Link} 
          color="green" 
          to={`posts/${props.id}`}
          >
            <Icon name="eye" />
            </Button>
          <Button
            icon basic
            as={Link} to={`/api/posts/${props.id}`}
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
  )
}

export default Post;