import React from 'react';
import { Button, Card, Container, Icon} from 'semantic-ui-react';


class Comment extends React.Component {
 state = {body: "" };

 


 render() {
   const { body } = this.props;
   return (

      <Container 
        style={{backgroundColor: "#fbf9f9", paddingTop: "20px"}}
      >
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