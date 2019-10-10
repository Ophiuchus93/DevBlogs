import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Container, Image, Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import Beaker from "../images/Beaker.png";
import Avatar from "./Avatar";

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to="/Profile">
          <Avatar/>
          </Link>
            <Button
            id="logout"
            name='logout'
            color="blue"
            onClick={ () => handleLogout(this.props.history) }
            >
            </Button>
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
    }
  }




  
  render() {
    return (
      <Container>
        <Menu pointing secondary>

          <Link to="/">
            <Image style={{width: "65px", height: "75px", paddingTop: "8px",}} src={Beaker} />
          </Link>
          <Link to='/posts'>
            <Menu.Item
              name='posts'
              id='posts'
              active={this.props.location.pathname === '/posts'}
            />
          </Link>
          <Link to='/form'>
            <Menu.Item
              name='Add Post'
              id='add post'
              active={this.props.location.pathname === '/form'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </Container>
    )
  }
}





export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);