import React from "react";
import { Header, Form, } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import axios from "axios";

class PostForm extends React.Component {
  state = { title: "", body: "", file: ""}

  componentDidMount() {
    if(this.props.match.params.id){
      axios.get(`/api/posts/${this.props.match.params.id}`)
      .then(res => {
        const { title, body, } = res.data
        this.setState({title, body})
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  handleDrop = (files) => {
    this.setState({ file: files[0], });
  };

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);
    data.append('title', this.state.title);
    data.append('body', this.state.body);

    if (this.props.match.params.id) {   
      // debugger   
      axios.put(`/api/posts/${this.props.match.params.id}`, 
      data)
      .then(res => {
        this.props.history.push("/posts")
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      axios.post(`/api/posts`, data)
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
        <Dropzone
          onDrop={this.handleDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
          <br />
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

const styles = {
  dropzone: {
    height: "300px",
    width: "300px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer"
  },
};

export default PostForm;
