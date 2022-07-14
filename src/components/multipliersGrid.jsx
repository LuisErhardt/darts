import React, { Component } from "react";
import Multiplier from "./multiplier";

class MultipliersGrid extends Component {
  render() {
    return (
      <div className="gridRow row row-cols-2 ms-0 me-0">
        <Multiplier
          key={"Double"}
          myClick={() => this.props.handleDouble()}
          name={"Double"}
          doubleIsPressed={this.props.doubleIsPressed}
        />
        <Multiplier
          key={"Triple"}
          myClick={() => this.props.handleTriple()}
          name={"Triple"}
          tripleIsPressed={this.props.tripleIsPressed}
        />
      </div>
    );
  }
}

export default MultipliersGrid;
