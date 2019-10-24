import React from "react";
  class Like extends React.Component {
state = {
     likes: 0
    };

   incrementMe = () => {
    let newCount = this.state.likes + 1
    this.setState({
       likes: newCount
     })
   }

  render() {
   return (
     <div>
      <button onClick={this.incrementMe}><span role="img" aria-label="heart">❤️</span> {this.state.likes} </button>
     </div>
    )
   }
} 

export default Like;
