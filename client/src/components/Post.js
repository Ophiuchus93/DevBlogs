import React from "react";
import { Link, } from "react-router-dom";
import { Container, Button, Grid, Header, Icon, Image, Segment } from "semantic-ui-react";

const Post = (props) => {

  return (
    <Grid.Column style={styles.testTwo} width={5}>

      <Segment>
        <Container>
          <Grid>
            <Grid.Row >
              <Grid.Column as={Link} to={`posts/${props.id}`}>
                <Image src={props.image}
                  style={styles.image}
                />
                <Header as="h2"
                  textAlign="right"
                // as={Link} to={`posts/${props.id}`}
                >
                  {props.title}
                </Header>
                <hr />
                <p style={{ color: "black" }}>{props.body}</p>
                <br />
                <br />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
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
      </Segment>
    </Grid.Column>

  )
}

const styles = {
  testTwo: {
    padding: '2em',
  },

  image: {
    display: "flex",
    border: "solid 2px blue",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em",
  }
}



export default Post;