import React from 'react';
import { Card, Container,} from 'semantic-ui-react';


class Comment extends React.Component {
 state = {body: "" };

 render() {
   const { body } = this.props;
   return (

      <Container>
     <Card>
       <Card.Content> {body} </Card.Content>
     </Card>
      </Container>
   )
 }
}
export default Comment;