import React from "react"
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from "semantic-ui-react"

class Register extends React.Component {
  state = { firstName: "", lastName:"", userName: "", cohort: "", email: "", password: "", passwordConfirmation: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, userName, cohort, email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history } = this.props;

    if (password.length < 6)
      alert("Password Must Contain 6 Characters or More")
    if (password === passwordConfirmation)

      handleRegister({ firstName, lastName, userName, cohort, email, password, passwordConfirmation, }, history);
    else
      alert("Passwords Do Not Match")
  };

  handleChange = (e) => {
    const { name, value, } =e.target;
    this.setState({ [name]: value, });
  };

  render() {
    const { firstName, lastName, userName, cohort, email, password, passwordConfirmation, } = this.state;

    return (
      <Segment>
        <Header as="h1" textAlign="center">Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="First Name"
            required
            autoFocus
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Last Name"
            required
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Username"
            required
            name="userName"
            value={userName}
            placeholder="Username"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Cohort (optional)"
            name="cohort"
            value={cohort}
            placeholder="Cohort: Season and Year (e.g, Fall 2019)"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Email"
            required
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password Confirmation"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Confirm Password"
            type="password"
            onChange={this.handleChange}
          />
          <Segment>
            <Button primary type="submit">Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
};

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} />}
      </AuthConsumer>
    )
  }
};
