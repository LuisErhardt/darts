import React, { Component } from "react";

class Initialization extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", players: [], points: 501 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePointsChange = this.handlePointsChange.bind(this);
    this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePointsChange() {
    const newPoints = this.state.points === 501 ? 301 : 501;
    this.setState({ points: newPoints });
  }

  handleDeletePlayer() {
    const players = this.state.players;
    players.pop();
    this.setState({ players: players });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    if (name !== "") {
      const players = this.state.players;
      players.push(name);
      this.setState({ players: players, name: "" });
    }
  }

  render() {
    const players = this.state.players.map(function (player, index) {
      return (
        <div className="initPlayer ms-3 me-3 mb-3" key={index}>
          <h3 aria-label={"Spieler " + String(index + 1)}>Spieler {index + 1}</h3>
          <div aria-label={player}>{player}</div>
        </div>
      );
    });
    return (
      <div className="fs-4 initWrap text-center">
        <h1>Darts Counter</h1>
        <div className="border-top border-2">
          Punkte
          <br />
          <button
            className="btn btn-primary btn-lg m-2"
            type="button"
            aria-label="Punkte"
            value={this.state.points}
            onClick={(e) => {
              this.handlePointsChange();
              setTimeout(() => e.target.blur(), 400);
            }}
          >
            {this.state.points}
          </button>
        </div>
        <div className="d-flex justify-content-center">
          {this.state.players.length < 4 ? (
            <div>
              Name von Spieler {this.state.players.length + 1} eingeben:
              <form onSubmit={this.handleSubmit} className="d-flex justify-content-center m-2">
                <input
                  id="nameInput"
                  className=""
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.handleNameChange(e)}
                />
                <button className="btn btn-secondary" type="submit" aria-label="submit">
                  <i className="bi bi-check-lg"></i>
                </button>
              </form>
            </div>
          ) : (
            <>Maximal 4 Spieler m??glich</>
          )}
        </div>

        <div className="border-top border-2 d-flex flex-wrap justify-content-around">
          {players}
          {this.state.players.length > 0 ? (
            <div>
              <button className="btn btn-warning" onClick={this.handleDeletePlayer}>
                Letzten Spieler l??schen
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => this.props.startGame(this.state.players, this.state.points)}
          >
            Spiel starten
          </button>
        </div>
      </div>
    );
  }
}

export default Initialization;
