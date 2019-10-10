import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import  Dropzone from "react-dropzone";
import { Container, Form, Grid, Image, Header, Button, } from "semantic-ui-react";

const defaultImage = 'https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180818343/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg';
class Profile extends React.Component {
  state = { editing: false, formValues: { name: "", email: "", file: "", }, };
  componentDidMount() {
    const { auth: { user: { name, email, }, }, } = this.props;
    this.setState({ formValues: { name, email, }, });
  };
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing, });
  };
  profileView = () => {
    const { auth: { user, }, } = this.props;
    return (
      <>
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h1">{ user.name }</Header>
          <Header as="h1">{ user.email }</Header>
        </Grid.Column>
      </>
    );
  };
  handleChange = (e, { name, value, }) => {
    this.setState({ formValues: { ...this.state.formValues, [name]: value, }, });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { name, email, file, });
    this.setState({ editing: false, });
  };
  handleDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  };
  editView = () => {
    const { formValues: { name, email, }, } = this.state;
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
                    <p>Try dropping some files here, or click to select a file</p>
                }
              </div>
            )}
          </Dropzone>         
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input 
            label="Name"
            name="name"
            value={name}
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