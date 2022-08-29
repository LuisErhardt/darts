import React from "react";
import logo from "../Trophy.svg";

function EndingScreen(props) {
  const winner = props.winner;

  return (
    <div className="endingScreen w-100">
      <div id="trophyWrap" className="d-flex justify-content-center">
        <img alt="" src={logo} />
      </div>
      <div className="endingStats d-flex flex-wrap justify-content-center w-100 mb-3">
        <div>
          <h1>Glückwunsch!</h1>
          <p>{winner.name} hat gewonnen!</p>
          <p>Average: {(winner.gamePoints / winner.numberThrows) * 3}</p>
          <p>Geworfene Darts: {winner.numberThrows}</p>
        </div>
        <div className="d-flex justify-content-center w-100 mt-5">
          <button className="btn btn-success btn-lg" onClick={props.newGame}>
            Neues Spiel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EndingScreen;
