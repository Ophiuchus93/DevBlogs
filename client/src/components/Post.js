import React from "react";
import { Link, } from "react-router-dom";
import { Card, Dropdown, Image, } from "react-bootstrap";
// import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";

const Post = (props) => {
  return (
    <div>

      <Card bg="light" style={{ width: '20rem' }} border="dark"  >
        <Card.Body as={Link} to={`posts/${props.id}`}  >

          <Image variant="top" style={styles.image} src={props.image} thumbnail />
          <br />
          <br />
          <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
          <br />
          <Card.Text style={{ color: "black", }} >{props.body}</Card.Text>
        </Card.Body>

        <Dropdown>
          <Dropdown.Toggle variant="Snfo" >
            Actions
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to={`/api/posts/${props.id}`}>Edit</Dropdown.Item>
            <Dropdown.Item onClick={() => props.deletePost(props.id)}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card>
      <br />
    </div>
    //   <Link
    //   as={Link} to={`/api/posts/${props.id}`}
    // >
    //   Edit
    // </Link>
    // <br />
    // <Link
    //   onClick={() => props.deletePost(props.id)}
    // >
    //   Delete
    // </Link>
  )
};

// <Grid.Column style={styles.testTwo} width={5}>

//   <Segment style={{ backgroundColor: "#fbf9f9" }}>
//     <Container style={styles.container}> 
//       <Grid>
//         <Grid.Row >
//           <Grid.Column as={Link} to={`posts/${props.id}`} >
//             <div style={styles.image}>
//               <Image src={props.image} />
//             </div>
//             <Header as="h2"
//               textAlign="right"
//             // as={Link} to={`posts/${props.id}`}
//             >
//               {props.title}
//             </Header>
//             <hr />
//             <p style={{ color: "black", overflow: "hidden", height: "78px",  }}>{props.body}</p>
//             <br />
//             <br />
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Container>

//   </Segment>
// </Grid.Column>

// )
// }

const styles = {
  //   testTwo: {
  //     padding: '2em',
  //   },

  image: {

    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "20rem"

  },

  //   container: {
  //     // border: "solid 2px red",
  //     // height: "500px",
  //   }

}
export default Post;
