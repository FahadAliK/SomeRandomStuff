import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";
class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", isRolling: false };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const roll1 = Math.floor(Math.random() * this.props.sides.length);
    const roll2 = Math.floor(Math.random() * this.props.sides.length);
    this.setState({
      die1: this.props.sides[roll1],
      die2: this.props.sides[roll2],
      isRolling: true
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} isRolling={this.state.isRolling} />
          <Die face={this.state.die2} isRolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "ROLLING..." : "ROLL DICE!"}
        </button>
      </div>
    );
  }
}
export default RollDice;
