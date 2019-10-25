import React from "react";
import { Link, } from "react-router-dom";
import {  Card, Image, } from "react-bootstrap";

const Post = (props) => {
  return (
    <div>
      <Card bg="light" style={{ width: '24rem' }}>
        <Card.Body as={Link} to={`posts/${props.id}`}>
          <Image variant="top" style={{height: "20rem"}} src={props.image} thumbnail />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body> 
      </Card>
      <br />
    </div>
  );
};

export default Post;
