import React from 'react';
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Posts from "./components/Posts";
import FetchUser from "./components/FetchUser";
// import PostForm from "./components/PostForm";
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from "react-router-dom";
import { Container, } from "semantic-ui-react";




const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/posts" component={Posts} /> 
          {/* <Route exact path="/post/new" component={PostForm} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
