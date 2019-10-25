import React from "react";
import { Link, } from "react-router-dom";
import {  Card, Image, } from "react-bootstrap";
import Truncate from 'react-truncate';

const Post = (props) => {
  return (
    <div>
      <Card bg="light" style={{ width: '20rem' }} border="dark">
        <Card.Body as={Link} to={`posts/${props.id}`}>
          <Image variant="top" style={styles.image} src={props.image} thumbnail />
          <br />
          <br />
          <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
          <br />
          <Card.Title>{props.title}</Card.Title>
          <Truncate lines={3} style={{ color: "black" }} >
          <Card.Text>{props.body}</Card.Text>
          </Truncate>
        </Card.Body> 
      </Card>
      <br />
    </div>
  );
};

const styles = {

  image: {

    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "20rem"
  },
};

export default Post;
