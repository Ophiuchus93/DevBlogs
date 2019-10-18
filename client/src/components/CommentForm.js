import React from 'react';
import { Form, TextArea, Header } from "semantic-ui-react"
import { AuthConsumer } from '../providers/AuthProvider';


class CommentForm extends React.Component {
  state = {
      body: "",
  };

  componentDidMount() {
    // this.setState({ user_name: this.props.auth.user.user_name })
    this.setState({ user_id: this.props.auth.user.id })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    const comment = this.state;
    e.preventDefault();
    this.props.addComment(comment)
    this.setState({body: ''})
  }

  render() {
    const { body } = this.state;
    return(
        <div>
          <Header as ="h5">Post A Comment</Header>
          <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            name="body"
            as={TextArea}
            placeholder="What do you think?"
            required
            value={body}
            maxLength="150"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Form.Button color="green">
          Submit
          </Form.Button>
          </Form>
        </div>
      )
  }
}

export default class ConnectedCommentForm extends React.Component {
  render(){
    return(
      <AuthConsumer>
        { auth => <CommentForm {...this.props} auth={auth} /> }
      </AuthConsumer>
    )
  }
}