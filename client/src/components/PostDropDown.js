import React from "react";
import { Link, } from "react-router-dom";
import { Card, Dropdown, Image, } from "react-bootstrap";
import Truncate from 'react-truncate';

const PostDropDown = (props) => {
  return (
    <div>
      <Card bg="light" style={{ width: '20rem' }} border="dark"  >
        <Card.Body as={Link} to={`posts/${props.id}`}  >
          <Image variant="top" style={styles.image} src={props.image} thumbnail />
          <br />
          <br />
          <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
          <br />
          <Truncate lines={3} style={{ color: "black" }} >
            <Card.Text >{props.body}</Card.Text>
          </Truncate>
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
  )
};


const styles = {

  image: {

    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "20rem"
  },
};

export default PostDropDown;

