import React from "react";
import { Link, } from "react-router-dom";
import { Container, Button, Grid, Header, Icon, Image, Segment } from "semantic-ui-react";
import Like from "./Like"
import Dislike from "./Dislike"

const Post = (props) => {
  return (
    <Grid.Column style={styles.testTwo} width={5}>

    <Segment>
       <Container> 
        <Grid>
          <Grid.Row >
            <Grid.Column as={Link} to={`posts/${props.id}`}>
              <Image src={props.image}
              // as={Link} to={`posts/${props.id}`}
              />
              <Header as="h2" 
              textAlign="right"
              // as={Link} to={`posts/${props.id}`}
              >
              {props.title}
              </Header>
              <hr />
              <p style={{color: "black"}}>{props.body}</p>
              <br />
              <br />
              <Button
                icon basic
                as={Link} to={`/api/posts/${props.id}`}
                color="yellow"
                size="medium"
              >
                <Icon name="pencil alternate" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
              <Button
                icon basic
                color="red"
                size="medium"
                onClick={() => props.deletePost(props.id)}
              >
                <Icon name="x" />
              </Button>
              <Like />
                <Dislike />
    </Segment>
    </Grid.Column>

  )
}

const styles = {
  testTwo: {
    padding: '2em',
  }
}



export default Post;