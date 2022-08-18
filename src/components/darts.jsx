import React, { Component } from "react";
import Initialization from "./initialize";
import Board from "./board";
import { Player } from "./player";

class Darts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initializationDone: false,
      players: [],
      points: 501,
    };
    this.handlePointsChange = this.handlePointsChange.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  handlePointsChange() {
    const newPoints = this.state.points === 501 ? 301 : 501;
    this.setState({ points: newPoints });
  }

  handleNameInput(name) {
    const players = this.state.players;
    players.push(name);
    this.setState({ players: players });
  }

  deletePlayer() {
    const players = this.state.players;
    players.pop();
    this.setState({ players: players });
  }

  startGame() {
    const players = this.state.players;
    if (players.length > 0) {
      const newPlayers = [];
      const points = this.state.points;
      for (var i = 0; i < players.length; i++) {
        newPlayers.push(new Player(players[i], points));
      }
      this.setState({ players: newPlayers, initializationDone: true });
    }
  }

  newGame() {
    this.setState({ initializationDone: false, players: [], points: 501 });
  }

  render() {
    return (
      <div className="topWrap container-fluid d-flex justify-content-center h-100 p-0">
        {this.state.initializationDone ? (
          <Board players={this.state.players} points={this.state.points} newGame={this.newGame} />
        ) : (
          <Initialization
            players={this.state.players}
            points={this.state.points}
            handlePointsChange={this.handlePointsChange}
            handleNameInput={(name) => this.handleNameInput(name)}
            deletePlayer={this.deletePlayer}
            startGame={this.startGame}
          />
        )}
      </div>
    );
  }
}

export default Darts;
