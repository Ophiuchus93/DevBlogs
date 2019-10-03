import React from "react";
import axios from "axios";


export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
    .then( res => {
      this.setState({ user: res.data.data });
      history.push("/")
    })
    .catch( err => {
      console.log(err)
    })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
    .then( res => {
      this.setState({ user: res.data.data});
      history.push("/")
    })
    .catch( err => {
      console.log(err);
    } )
  }

  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
    .then( res => {
      this.setState({ user: null, });
      history.push("/login");
    })
    .catch( err => {
      console.log(err)
    })
  }


  render () {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user,}),
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};


