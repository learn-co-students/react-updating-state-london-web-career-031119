// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasBeenClicked: false
      }
   }
   click = () => {
      this.setState({
         hasBeenClicked: true
      })
   }
   render() {
      return (
         <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.click}>Click Me!</button>
         </div>
      )
   }
}

export default ClickityClick;




