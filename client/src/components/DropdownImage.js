import React from 'react';
import { Dropdown } from "react-bootstrap";

const DropdownImage = () => {
  const { auth: { user, handleLogout, },  } = this.props;
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