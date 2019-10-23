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
<<<<<<< HEAD
=======
// import UserAdmin from "./components/UserAdmin";
>>>>>>> 3051b01e9ba0b9d9b33d9e1d9e31bfcb3039787e
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
<<<<<<< HEAD
=======
          {/* <ProtectedRoute exact path="/user/:id" component={UserAdmin} /> */}
>>>>>>> 3051b01e9ba0b9d9b33d9e1d9e31bfcb3039787e
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
