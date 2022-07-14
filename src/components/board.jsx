import React, { Component } from "react";
import NumbersGrid from "./numbersGrid";
import MultipliersGrid from "./multipliersGrid";
import { Player } from "./player";
import Stats from "./stats";
import EndingScreen from "./endingScreen";
import NewGameButton from "./newGameButton";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doubleIsPressed: false,
      tripleIsPressed: false,
      inputDisabled: false,
      players: this.props.players,
      gameOver: false,
      showUndo: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDouble = this.handleDouble.bind(this);
    this.handleTriple = this.handleTriple.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.hasWon = this.hasWon.bind(this);
    this.busted = this.busted.bind(this);
  }

  handleChange(throwInput) {
    const players = this.state.players;
    const player = players[0];
    if (this.state.doubleIsPressed) {
      player.score(throwInput * 2);
    } else {
      if (this.state.tripleIsPressed && throwInput !== 25) {
        player.score(throwInput * 3);
      } else {
        player.score(throwInput);
      }
    }
    players[0] = player;
    this.setState({ players: players });
    if (this.hasWon(player)) {
      this.setState({ gameOver: true });
    } else {
      if (!this.busted()) {
        this.updateCurrentPlayer();
      }
    }
    this.setState({
      doubleIsPressed: false,
      tripleIsPressed: false,
      showUndo: true,
    });
  }

  // checks if the player busted and reverts the thrown points if necessary
  busted() {
    const players = this.state.players;
    if (players[0].points <= 1) {
      for (var i = 0; i <= players[0].currentThrows.length - 1; i++) {
        players[0].points = players[0].points + players[0].currentThrows[i];
      }
      this.helperUpdatePlayer(players);
      return true;
    }
    return false;
  }

  // helper which handles the necessary changes
  // if the player who is throwing changes
  helperUpdatePlayer(players) {
    players[players.length - 1].clearThrows();
    this.setState({
      inputDisabled: true,
    });
    setTimeout(() => {
      players.push(players.shift());
      this.setState({
        players: players,
        inputDisabled: false,
      });
    }, 1500);
  }

  updateCurrentPlayer() {
    const players = this.state.players;
    if (players[0].hasThrownThree()) {
      players[0].updateAverage();
      this.helperUpdatePlayer(players);
    }
  }

  hasWon(player) {
    return this.state.doubleIsPressed && player.points === 0;
  }

  handleTriple() {
    if (this.state.doubleIsPressed) {
      this.setState({
        doubleIsPressed: false,
        tripleIsPressed: true,
      });
    } else {
      if (this.state.tripleIsPressed) {
        this.setState({ tripleIsPressed: false });
      } else {
        this.setState({ tripleIsPressed: true });
      }
    }
  }

  handleDouble() {
    if (this.state.tripleIsPressed) {
      this.setState({
        tripleIsPressed: false,
        doubleIsPressed: true,
      });
    } else {
      if (this.state.doubleIsPressed) {
        this.setState({ doubleIsPressed: false });
      } else {
        this.setState({ doubleIsPressed: true });
      }
    }
  }

  handleUndo() {
    const players = this.state.players;
    if (players[0].currentThrows.length === 0) {
      // switch back to previous player
      players.unshift(players.pop());
      this.setState({ showUndo: false });
    }
    players[0].undo();
    this.setState({ players: players });
  }

  render() {
    if (!this.state.gameOver) {
      return (
        <div className="wrap">
          <Stats players={this.state.players} />
          <div>
            <MultipliersGrid
              doubleIsPressed={this.state.doubleIsPressed}
              tripleIsPressed={this.state.tripleIsPressed}
              handleDouble={this.handleDouble}
              handleTriple={this.handleTriple}
            />
            <NumbersGrid
              myClick={this.handleChange}
              doubleIsPressed={this.state.doubleIsPressed}
              undo={this.handleUndo}
              showUndo={this.state.showUndo}
              inputDisabled={this.state.inputDisabled}
            />
          </div>
          <NewGameButton newGame={this.newGame} />
        </div>
      );
    } else {
      return (
        <EndingScreen
          winner={this.state.players[0]}
          newGame={this.props.newGame}
        />
      );
    }
  }
}

export default Board;
