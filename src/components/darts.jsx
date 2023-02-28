import React, { Component } from "react";
import Initialization from "./initialize";
import Board from "./board";
import { Player } from "./player";
import Credits from "./credits";

class Darts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initializationDone: false,
      players: [],
      points: 501,
    };
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  startGame(players, points) {
    if (players.length > 0) {
      const newPlayers = [];
      for (var i = 0; i < players.length; i++) {
        newPlayers.push(new Player(players[i], points));
      }
      this.setState({ players: newPlayers, points: points, initializationDone: true });
    }
  }

  newGame() {
    this.setState({ initializationDone: false });
  }

  render() {
    return (
      <div className="topWrap container-fluid d-flex justify-content-center h-100 p-0">
        {this.state.initializationDone ? (
          <Board players={this.state.players} points={this.state.points} newGame={this.newGame} />
        ) : (
          <>
            <Initialization startGame={this.startGame} />
            <Credits />
          </>
        )}
      </div>
    );
  }
}

export default Darts;
