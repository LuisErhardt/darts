import React from "react";

function NewGameButton(props) {
  return (
    <div className="newGameWrap col p-0">
      <div className="offcanvas offcanvas-top text-dark" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Neues Spiel starten?</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body ">
          Der bisherige Spielfortschritt geht verloren.
          <br />
          <br />
          <button className="btn btn-warning me-2" onClick={props.newGame}>
            Neues Spiel
          </button>
          <button className="btn btn-secondary" data-bs-dismiss="offcanvas" aria-label="Close">
            Abbrechen
          </button>
        </div>
      </div>

      <button className="input btn btn-warning flex-grow-1 fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
        <i className="bi bi-plus-circle-fill"></i>
      </button>
    </div>
  );
}

export default NewGameButton;
