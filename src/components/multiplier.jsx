import React, { Component } from "react";

class Multiplier extends Component {
  setStyle() {
    const defaultStyles = "input btn d-flex justify-content-center align-items-center fw-bold flex-grow-1 ";
    let colorStyle = "";
    if (this.props.name === "Double") {
      colorStyle = this.props.doubleIsPressed ? "btn-success" : "btn-secondary";
    } else {
      colorStyle = this.props.tripleIsPressed ? "btn-success" : "btn-secondary";
    }
    return defaultStyles + colorStyle;
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
