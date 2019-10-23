import React from "react";
import "./styles2.css";

export default class RandomNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
  }

  getNumber = e => {
    console.log(e.target.value);
  };

  click = e => {
    e.preventDefault();
    console.log("Click");

    let random = Math.floor(Math.random() * 100 + 1);
    console.log(random);

    this.setState({
      number: random
    });
  };

  render() {
    return (
      <div className="random_all">
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>

        <div className= "btn">
          <button onClick={event => this.click(event)}>ENVIAR</button>
          <div className="box_number">{this.state.number}</div>
        </div>
      </div>
    );
  }
}
