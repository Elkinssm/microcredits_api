import React from "react";
import "./styles.css";

export default class MagicBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textMessage: ""
    };
  }

  getText = e => {
    console.log(e.target.value);
    // const prev = "";

    // if (e.target.value.length > 3) console.log("Es mayor de 3");

    // Usar ? y : para reducir if y else

    //   e.target.value.length > 3 ? console.log("Mayor") : console.log("Menor");

    //   this.setState({
    //     textMessage: `${prev}${e.target.value}`
    //   });
  };

  click = e => {
    e.preventDefault();
    console.log("Click", e, e.target.elements[0].value);

    this.setState({
      textMessage: e.target.elements[0].value
    });
    e.target.elements[0].value = "";
  };

  render() {
    return (
      <div className="magic-box">
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>

        <form onSubmit={event => this.click(event)}>
          <input type="text" onKeyUp={e => this.getText(e)} />
          <button>Enviar</button>
        </form>

        <div
          className={`mensaje-container ${
            this.state.textMessage.length > 3 ? "bg-blue" : "bg-red"
          }`}
        >
          {/* {this.state.textMessage} */}

          <span>El texto escrito es {this.state.textMessage} </span>
        </div>
      </div>
    );
  }
}
