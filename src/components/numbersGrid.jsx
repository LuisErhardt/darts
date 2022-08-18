import React, { Component } from "react";
import ThrowInput from "./throwInput";
import Multiplier from "./multiplier";
import NewGameButton from "./newGameButton";

class NumbersGrid extends Component {
  constructor(props) {
    super(props);
    this.fields = this.initializeFields();
  }

  initializeFields() {
    const fields = [];
    for (let i = 1; i <= 20; i++) {
      fields.push(i);
    }
    return fields;
  }

  render() {
    const self = this;
    const fieldsArray = this.fields.map(function (field, index) {
      return <ThrowInput key={index} value={field} name={field} myClick={(v) => self.props.myClick(v)} inputDisabled={self.props.inputDisabled} />;
    });

    return (
      <div className="gridRow row row-cols-3  ms-0 me-0">
        <Multiplier key={"Double"} myClick={() => this.props.handleDouble()} name={"Double"} doubleIsPressed={this.props.doubleIsPressed} />
        <Multiplier key={"Triple"} myClick={() => this.props.handleTriple()} name={"Triple"} tripleIsPressed={this.props.tripleIsPressed} />
        {fieldsArray}
        {this.props.tripleIsPressed ? (
          <div></div>
        ) : (
          <ThrowInput value={25} name={this.props.doubleIsPressed ? "Bull's Eye" : "Single Bull"} myClick={(v) => this.props.myClick(v)} inputDisabled={this.props.inputDisabled} />
        )}
        <ThrowInput value={0} name={0} myClick={(v) => this.props.myClick(v)} inputDisabled={this.props.inputDisabled} />
        {this.props.showUndo ? <ThrowInput value={""} name={"Undo"} myClick={this.props.undo} inputDisabled={self.props.inputDisabled} /> : <div></div>}
        <NewGameButton newGame={this.props.newGame} />
      </div>
    );
  }
}

export default NumbersGrid;
