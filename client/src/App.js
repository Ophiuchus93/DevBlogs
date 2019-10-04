import React from 'react';
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from "react-router-dom";
import { Container, } from "semantic-ui-react";
import Profile from ' ./components/Profile'

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/posts" component={Posts} /> 
<<<<<<< HEAD
          <ProtectedRoute exact path="/new" component={PostForm} />
          <ProtectedRoutes exact path="/profile" component={Profile} />
=======
          <ProtectedRoute exact path="/form" component={PostForm} />
>>>>>>> 0c997e248c676ef773e25cc72fe8856c3fcf0c0e
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
