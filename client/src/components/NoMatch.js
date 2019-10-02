import React from "react";
import { Link, } from "react-router-dom";
import { Header, } from "semantic-ui-react";

const NoMatch = () => (
  <>
   <Header as="h2" textAlign="center">
     Sorry This Page Does Not Exist...
   </Header>
   <Header as="h1" textAlign="center">
     But Dinosaurs Do!
   </Header>
   <Header as="h1" textAlign="center">
         <span> 🦖 🦕 🤯 </span>
     <br />
     <Link to="/">Home</Link>
   </Header>
 </>
)

export default NoMatch;