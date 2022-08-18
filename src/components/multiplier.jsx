import React, { Component } from "react";

class Multiplier extends Component {
  setStyle() {
    const pressedStyle = "input btn btn-success d-flex justify-content-center align-items-center fw-bold flex-grow-1";
    const unpressedStyle = "input btn btn-secondary d-flex justify-content-center align-items-center fw-bold flex-grow-1";

    if (this.props.name === "Double") {
      return this.props.doubleIsPressed ? pressedStyle : unpressedStyle;
    }
    return this.props.tripleIsPressed ? pressedStyle : unpressedStyle;
  }

  render() {
    return (
      <div className="multiplierWrap col p-0">
        <button className={this.setStyle()} onClick={() => this.props.myClick()}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Multiplier;
