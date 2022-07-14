import React, { Component } from "react";

class ThrowInput extends Component {
  render() {
    return (
      <div className="inputWrap col p-0">
        <button
          disabled={this.props.inputDisabled}
          className={
            "input btn btn-secondary d-flex justify-content-center align-items-center fw-bold"
          }
          onClick={(e) => {
            this.props.myClick(this.props.value);
            setTimeout(() => e.target.blur(), 1000);
          }}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default ThrowInput;
