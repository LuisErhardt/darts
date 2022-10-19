import React, { Component } from "react";

class Initialization extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    if (name !== "") {
      this.setState({ name: "" });
      this.props.handleNameInput(name);
    }
  }

  render() {
    const players = this.props.players.map(function (player, index) {
      return (
        <div className="initPlayer ms-3 me-3 mb-3" key={index}>
          <h3 className="d-flex flex-wrap justify-content-center">Spieler {index + 1}</h3>
          <div className="d-flex flex-wrap justify-content-center">{player}</div>
        </div>
      );
    });
    return (
      <div className="fs-4 initWrap">
        <h1 className="d-flex justify-content-center">Darts Counter</h1>
        <div className="border-top border-2 d-flex flex-column align-items-stretch">
          <div className="d-flex justify-content-around">
            <div className="">
              <div className="d-flex justify-content-center">Punkte</div>
              <div className="d-flex justify-content-center m-2">
                <button
                  className="btn btn-primary btn-lg"
                  type="button"
                  name="points"
                  value={this.props.points}
                  onClick={(e) => {
                    this.props.handlePointsChange();
                    setTimeout(() => e.target.blur(), 400);
                  }}
                >
                  {this.props.points}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {this.props.players.length < 4 ? (
            <div>
              <div className="d-flex justify-content-center">
                Name von Spieler {this.props.players.length + 1} eingeben:
              </div>
              <div className="d-flex justify-content-center m-2">
                <form onSubmit={this.handleSubmit}>
                  <div className="d-flex justify-content-center">
                    <input
                      id="nameInput"
                      className=""
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <button className="btn btn-secondary" type="submit">
                      <i className="bi bi-check-lg"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div>Maximal 4 Spieler möglich</div>
          )}
        </div>

        <div className="border-top border-2 d-flex flex-wrap justify-content-around">
          {players}
          {this.props.players.length > 0 ? (
            <div>
              <button className="btn btn-warning" onClick={this.props.deletePlayer}>
                Letzten Spieler löschen
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-lg" onClick={this.props.startGame}>
            Spiel starten
          </button>
        </div>
      </div>
    );
  }
}

export default Initialization;
