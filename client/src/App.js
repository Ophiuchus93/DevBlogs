import React from 'react';
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import PostView from "./components/PostView";
import FetchUser from "./components/FetchUser";
import Profile from "./components/Profile";
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from "react-router-dom";
import { Container, } from "semantic-ui-react";



const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/form" component={PostForm} />
          <ProtectedRoute exact path="/api/posts/:id" component={PostForm} />
          <ProtectedRoute exact path="/Profile" component={Profile} />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} /> 
          <Route exact path="/posts/:id" component={PostView} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
