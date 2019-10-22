import React from "react";
class Dislike extends React.Component {
state = {
     count: 0
};
   decrementMe = () => {
     let newCount = this.state.count + 1
     this.setState({
       count: newCount
     })
   }
  render() {
   return (
     <div>
      <button onClick={this.decrementMe}>👎 Dislike: {this.state.count} </button> 
     </div>
    )
   }
} 
export default Dislike;