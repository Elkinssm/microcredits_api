import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  //LIFE CIRCLE OF COMPONENTS
  // Get when the component will mount

  componentWillMount() {
    console.log("Component will mount");
  }

  //Get when component did mount
  componentDidMount() {
    console.log("Component did mount");
  }

  //Get when
  componentWillReceiveProps() {
    console.log("Component will receive");
  }

  
  click() {
    console.log("click");
  }
  style = {
    border: "2px solid red",
    "border-radius": "5px",
    width: "20%"
  };

  render() {
    return (
      <div className="button" onClick={this.click} style={this.style}>
        {this.props.tag}
      </div>
    );
  }
}
