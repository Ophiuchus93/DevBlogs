import React from "react";
import { Link, } from "react-router-dom";
import { Container, Button, Grid, Header, Icon, Segment } from "semantic-ui-react";

const Post = (props) => {

  return (
    <Segment>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2" textAlign="right">{props.title}</Header>
              <hr />
              <p>{props.body}</p>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}



export default Post;