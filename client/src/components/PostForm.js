import React from "react";
import { Header, Form, } from "semantic-ui-react";
import axios from "axios"

class PostForm extends React.Component {
  state = { title: "", body: "", }

  componentDidMount() {
    if(this.props.match.params.id){
      axios.get(`/api/users/:user_id/posts/${this.props.match.params.id}`)
      .then(res => {
        const { title, body } = res.data
        this.setState({title, body})
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.match.params.id) {
      axios.put(`/api/users/${this.props.match.params.user_id}/posts/${this.props.match.params.id}`, this.state)
      .then(res => {
        this.props.history.push("/posts")
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      axios.post("/api/users/:user_id/posts", this.state)
      .then( res => {
        this.props.history.push("/posts")
      })
      .catch ( err => {
        console.log(err)
      })
    }
  }
 
  render() {
    const { title, body, } = this.state;
    return (
      <div>
        <Header as="h1">{this.props.match.params.id ? "Edit Your Post" : "Make A New Post"}</Header>
        <Form onSubmit={this.handleSubmit}>
            <Form.Input
              required
              placeholder="Title"
              label="Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <Form.TextArea
              required
              placeholder="Body"
              label="Body"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    );
  };
};

export default PostForm;
