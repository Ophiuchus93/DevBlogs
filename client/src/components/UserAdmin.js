import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Header, Form, } from "semantic-ui-react";
import axios from "axios";

class UserAdmin extends React.Component {
  state = { user: {}, }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then( response => {
        this.setState({ user: response.data, })
      })
      .catch( error => {
        console.log(error)
      })
  }

  handleChange = (event, { value, }) => {
    this.setState({ user: { ...this.state.user, admin: value, }, });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/users${this.props.match.params.id}`, this.state.user)
      .then( alert("User Updated!") )
      .catch( error => {
        console.log(error)
      })
  }

  render() {
    const { user, } = this.state
    return (
      <> 
        {
          this.props.admin_authenticated ?
          <>
            <Header as="h1">{user.email}</Header>
            <Header>Admin Status:</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Dropdown
                fluid
                selection
                value={user.admin}
                options={adminOptions}
                onChange={this.handleChange}
              />
              <Form.Button>Submit</Form.Button>
            </Form>
          </>
        :
          this.props.history.push("/")
        }
      </>
    )
  }
}

const adminOptions = [
  { key: "true", text: "true", value: true, },
  { key: "false", text: "false", value: false, }
];

const ConnectedUserAdmin = (props) => (
  <AuthConsumer>
    { auth =>
      <UserAdmin
        {...props}
        auth={auth}
        admin_authenticated={auth.user.admin === true}
      />
    }
  </AuthConsumer>
)

export default ConnectedUserAdmin;