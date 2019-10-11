import React from 'react';
import { Button, Card, Container, Icon} from 'semantic-ui-react';
// import axios from "axios"


class Comment extends React.Component {
 state = {body: "" };

 


 render() {
   const { body } = this.props;
   return (

      <Container>
     <Card>
       <Card.Content> {body} </Card.Content>
       <Button
                icon basic
                color="red"
                size="tiny"
                onClick={() => this.props.deleteComment(this.props.comment.id)}
              >
                <Icon name="x" />
              </Button>
     </Card>
      </Container>
   )
 }
}
export default Comment;