// import React from 'react';
// import axios from 'axios';
// import { Form, TextArea, Header } from "semantic-ui-react"
// import { AuthConsumer } from '../providers/AuthProvider';


// class CommentForm extends React.Component {
//   state = {
//     ctitle: "Title",
//     body: '',
//     user_name: '',
//     user_id: '',
//   };
//   componentDidMount() {
//     this.setState({ user_name: this.props.auth.user.user_name })
//     this.setState({ user_id: this.props.auth.user.id })
//   }
//   handleChange = (e) => {     
//     const { name, value, } = e.target;
//     this.setState({ [name]: value, })
//   }
//   handleSubmit = (e) => {
//     const comment = this.state;
//     e.preventDefault();
//     axios.post(`/api/videos/${this.props.match.params.id}/comments`, comment)
//       .then( res => this.props.history.push(`/videos/${this.props.match.params.id}`))
//   }
//   render() {
//     const { body } = this.state;
//     return(
//         <div>
//           <Header as ="h2">New Comment</Header>
//           <Form onSubmit={this.handleSubmit}>
//           <Form.Input 
//             name="body"
//             as={TextArea}
//             placeholder="Post Body"
//             required
//             value={body}
//             onChange={this.handleChange}
//           />
//           <br />
//           <br />
//           <Form.Button color="green">
//           Submit
//           </Form.Button>
//           </Form>
//         </div>
//       )
//   }
// }
// export default class ConnectedCommentForm extends React.Component {
//   render(){
//     return(
//       <AuthConsumer>
//         { auth => <CommentForm {...this.props} auth={auth} /> }
//       </AuthConsumer>
//     )
//   }
// }