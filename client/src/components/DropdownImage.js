import React from 'react'
import { Dropdown, Button } from 'semantic-ui-react'
import { Link, }from 'react-router-dom'

const DropdownImage = () => (
  <Dropdown text='Logged in as Jade Xa'
  
  >
    <Dropdown.Menu>
      <Link to='/Profile'>
      <Dropdown.Item text='Your Profile'/>
      </Link>
        <Dropdown.Item text='Logout'>
        </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownImage