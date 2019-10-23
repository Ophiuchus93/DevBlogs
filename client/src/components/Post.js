import React from "react";
import { Link, } from "react-router-dom";
// import { Container, Button, Grid, Header, Icon, Image, Segment } from "semantic-ui-react";
import { Icon, } from "semantic-ui-react";
import { Button, Card, CardDeck, CardColumns, Image, } from "react-bootstrap";

const Post = (props) => {

return (
  <div>
        <Card bg="light" style={{ width: '20rem' }}>
          <Card.Body>

            <Image variant="top" src={props.image} thumbnail />
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.body}</Card.Text>
          </Card.Body>
          <Button as={Link} to={`/api/posts/${props.id}`} variant="outline-warning" >Edit</Button>
          <Button onClick={() => props.deletePost(props.id)} variant="outline-danger">Delete</Button>
        </Card>
    </div>


//   <>
//   <CardColumns >
//       <Card
//         style={{ width: "26rem"}}
//         as={Link} 
//         to={`posts/${props.id}`}
//       >
//         <Card.Img
//           style={{ paddingLeft: "20px", height: "330px", width: "345px"}}
//           src={props.image} 
//         />
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text>{props.body}</Card.Text>
//       </Card>
//   </CardColumns>
//             <Button 
//               variant="primary"
//               icon basic
//               as={Link} to={`/api/posts/${props.id}`}
//               // color="yellow"
//               size="medium"
//             >
//               <Icon name="pencil alternate" />
//             </Button>
//             <Button 
//               variant="primary"
//               icon basic
//               // color="red"
//               size="medium"
//               onClick={() => props.deletePost(props.id)}
//               >
//               <Icon name="x" />
//             </Button>
// </>
  )
}

export default Post;





//  ======================= SEMANTIC ==============================

// return (
//   <Grid.Column  style={styles.testTwo} width={5}>

//   <Segment style={styles.segment} > {/* style={{backgroundColor: "#fbf9f9",}} */}
//      <Container style={styles.container}> 
//       <Grid style={styles.grid}>
//         <Grid.Row style={styles.gridRow}>
//           <Grid.Column 
//               style={styles.gridColumn}
//               as={Link} 
//               to={`posts/${props.id}`}
//               // style={{width: "315px"}}
//           >
//             <div style={styles.image}>
//               <Image src={props.image} />
//             </div>
//             <Header as="h2" 
//             textAlign="right"
//             // as={Link} to={`posts/${props.id}`}
//             >
//             {props.title}
//             </Header>
//             <hr />
//             <p style={{color: "black", overflow: "auto"}}>{props.body}</p>
//             <br />
//             <br />
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Container>
//             <Button
//               icon basic
//               as={Link} to={`/api/posts/${props.id}`}
//               color="yellow"
//               size="medium"
//             >
//               <Icon name="pencil alternate" />
//             </Button>
//             <Button
//               icon basic
//               color="red"
//               size="medium"
//               onClick={() => props.deletePost(props.id)}
//               >
//               <Icon name="x" />
//             </Button>

//     </Segment> 
//   </Grid.Column>

// )
// }

// const styles = {
// testTwo: {
//   padding: '2em',
//   border: "solid 2px black",
// },

// image: {
//   display: "flex",
//   // border: "solid 2px blue",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "2em",
// },

// grid: {
//   border: "solid 2px red",
// },

// gridRow: {
//   border: "solid 2px purple",
// },

// container: {
//   border: "solid 2px green",
// },

// segment: {
//   border: "solid 2px aqua",
// },

// gridColumn: {
//   border: "solid 2px pink",
// },
// }

// export default Post;