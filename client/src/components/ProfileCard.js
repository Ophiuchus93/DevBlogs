import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { ProfileCard, } from "../components/ProfileCard";

const ProfileCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Chris Wayne</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 1840</span>
      </Card.Meta>
      <Card.Description>
        TEST is a rapper living in Utah.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default ProfileCard