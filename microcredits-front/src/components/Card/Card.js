import React from "react";
import "./styles.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      btn:false
    }
  }

  click = (e) => {
    console.log("Click");

    this.setState(
      {
        btn:!this.state.btn
      }
    )
  
  };
  
  


  render() {
    return (
      <div className={`card ${this.state.btn===true?"bg-green":"bg-gray"}`}>
        <img src={this.props.image}></img>
        <h2>ID:{this.props.id}</h2>
        <h3>NAME:{this.props.name}</h3>
        
          <button onClick={event => this.click(event)}>Favorito</button>
        
      </div>
    );
  }
}
