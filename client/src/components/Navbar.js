import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Container, Image, Menu, Header, Dropdown, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import Beaker from "../images/Beaker.png";
import User from "../images/User.png";

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
<Menu.Menu position='right'>
          <Menu.Item>
            <Header.Content>
            <Image avatar src={user.image || User }   />
              <Dropdown title="Dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item  href={`/Profile`} text='Profile' icon="user" />
                  <Dropdown.Item href={`/form`} text='Add Post' icon="edit outline" />
                  <Dropdown.Item href={`/posts`} text='Post View' icon="desktop" />
                  <Dropdown.Item text='Logout' onClick={() => handleLogout(this.props.history)} icon="log out" />
                </Dropdown.Menu>
              </Dropdown>
            </Header.Content>
            <br/>
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Button
              id='login'
              name='login'
              color="blue"
              active={location.pathname === '/login'}
            >
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
         
        </Menu.Menu>
      )
    };
  };

  render() {
    return (
        <Menu pointing secondary >
          <Link to="/">
            <Image style={{width: "65px", height: "75px", paddingTop: "8px",}} src={Beaker} />
          </Link>
            { this.rightNavItems() }
          </Menu>
    )
  };
};

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }

      </AuthConsumer>
    )
  }
};

export default withRouter(ConnectedNavbar);