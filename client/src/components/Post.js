import React from "react";
import { Link, } from "react-router-dom";
import {  Card, Dropdown, Image, } from "react-bootstrap";
import Like from "./Like";
// import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";

const Post = (props) => {
  return (
    <div>
      
        <Card bg="light" style={{ width: '24rem' }} as={Link} to={`posts/${props.id}`}>
          <Card.Body>

            <Image variant="top" style={{height: "20rem"}} src={props.image} thumbnail />
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.body}</Card.Text>
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
      
    </div>
  )
};


export default Post;
