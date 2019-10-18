import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import Dropzone from "react-dropzone";
import { Container, Form, Grid, Image, Header, Button, } from "semantic-ui-react";

const defaultImage = 'https://react.semantic-ui.com/images/avatar/large/matthew.png';

class Profile extends React.Component {
  state = { editing: false, formValues: { firstName: "", lastName: "", email: "", file: "", }, };
  componentDidMount() {
    const { auth: { user: { firstName, lastName, email, }, }, } = this.props;
    this.setState({ formValues: { firstName, lastName, email, }, });
  };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  profileView = () => {
    const { auth: { user, }, } = this.props;
    return (
      <>
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h1">{ user.firstName } { user.lastName }</Header>
          <Header as="h4">{ user.email }</Header>
        </Grid.Column>
      </>
    );
  };

  // handleChange = (e, { firstName, lastName, value, }) => {
  //   this.setState({ formValues: { ...this.state.formValues, [firstName]: firstName, lastName, value, }, });
  // };

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      }
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { formValues: { name, email, file, }, } = this.state;
  //   const { auth: { user, updateUser, }, } = this.props;
  //   updateUser(user.id, { name, email, file, });
  //   this.setState({
  //     editing: false,
  //     formValues: {
  //       ...this.state.formValues,
  //       file: "",
  //     },
  //   });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { firstName, lastName, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { firstName, lastName, email, file, });
    this.setState({ editing: false, formValues: { ...this.state.formValues, file: '' } });
  };

  handleDrop = (files) => {
    // debugger
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  };

  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { firstName, lastName, email, } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
          <Dropzone
            onDrop={this.handleDrop}
            multiple={false}
          >
            { ({ getRootProps, getInputProps, isDragActive, }) => ( 
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ? 
                    <p>Drop files here...</p>
                  :
                    <p>Try dropping a file here, or click to select a file</p>
                }
              </div>
            )}
          </Dropzone>         
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input 
            label="First Name"
            name="firstName"
            value={firstName}
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Last Name"
            name="lastName"
            value={lastName}
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Email"
            name="email"
            type="email"
            value={email}
            required
            onChange={this.handleChange}
          />

          <Form.Button>Update</Form.Button>
        </Grid.Column>
      </Form>
    );
  };
 
  render() {
    const { editing, } = this.state;
    return(
      <Container>
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView() }
            <Grid.Column>
              <Button onClick={this.toggleEdit}>
                { editing ? "Cancel" : "Edit" }
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };
};
const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => (
      <Profile {...props} auth={auth} />
    )}
  </AuthConsumer>
);

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "2px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
};
export default ConnectedProfile;
