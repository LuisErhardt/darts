import React from "react";
import ThrowInput from "./throwInput";
import Multiplier from "./multiplier";
import NewGameButton from "./newGameButton";

function NumbersGrid(props) {
  const fieldsArray = () => {
    const a = [];
    for (let i = 1; i <= 20; i++) {
      a.push(
        <ThrowInput key={i} value={i} name={i} myClick={(v) => props.myClick(v)} inputDisabled={props.inputDisabled} />
      );
    }
    return a;
  };

  return (
    <div className="gridRow row row-cols-3  ms-0 me-0">
      <Multiplier
        key={"Double"}
        myClick={() => props.handleDouble()}
        name={"Double"}
        doubleIsPressed={props.doubleIsPressed}
      />
      <Multiplier
        key={"Triple"}
        myClick={() => props.handleTriple()}
        name={"Triple"}
        tripleIsPressed={props.tripleIsPressed}
      />
      {fieldsArray()}
      {props.tripleIsPressed ? (
        <div></div>
      ) : (
        <ThrowInput
          value={25}
          name={props.doubleIsPressed ? "Bull's Eye" : "Single Bull"}
          myClick={(v) => props.myClick(v)}
          inputDisabled={props.inputDisabled}
        />
      )}
      <ThrowInput value={0} name={0} myClick={(v) => props.myClick(v)} inputDisabled={props.inputDisabled} />
      {props.showUndo && (
        <ThrowInput value={""} name={"Undo"} myClick={props.undo} inputDisabled={props.inputDisabled} />
      )}
      <NewGameButton newGame={props.newGame} />
    </div>
  );
}

export default NumbersGrid;
