import React from 'react';
import { Button } from 'semantic-ui-react';
import { Dropdown } from "react-bootstrap";
import { Link, } from 'react-router-dom';

const DropdownImage = () => {
  const { auth: { user, handleLogout, }, location, } = this.props;
  return(

  <>
  
  <Dropdown>
       {/* <Dropdown.Item href="/events/new" text='Add New Event' icon="add" /> */}
       <Dropdown.Item href={`/users/${user.id}`} text='Account' icon="arrow right" />
       <Dropdown.Item text='Notifications' icon="bell outline" />
       <Dropdown.Item text='Logout' onClick={ () => handleLogout(this.props.history) } icon="log out" />
    </Dropdown>
    </>
  )
}

export default DropdownImage;