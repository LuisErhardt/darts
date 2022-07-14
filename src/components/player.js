export class Player {
  constructor(name, points) {
    this.name = name;
    this.gamePoints = points;
    this.points = points;
    this.currentThrows = [];
    this.lastThrow = 0;
    this.numberThrows = 0;
    this.average = 0;
  }

  score(v) {
    if (this.hasThrownThree()) {
      this.currentThrows = [];
    }
    const l = this.currentThrows;
    l.push(v);
    this.currentThrows = l;
    this.points = this.points - v;
    this.numberThrows++;
  }

  hasThrownThree() {
    return this.currentThrows.length === 3;
  }

  clearThrows() {
    this.lastThrow = this.currentThrows.pop();
    this.currentThrows = [];
  }

  updateAverage() {
    var num = Number(((this.gamePoints - this.points) * 3) / this.numberThrows);
    var rounded = num.toFixed(2);
    this.average = rounded;
  }

  undo() {
    if (this.currentThrows.length > 0) {
      this.numberThrows--;
      const v = this.currentThrows.pop();
      this.points = this.points + v;
    }
  }
}
