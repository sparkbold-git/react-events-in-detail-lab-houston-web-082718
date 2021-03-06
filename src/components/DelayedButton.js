// Code DelayedButton Component Here
import React, { Component } from "react";

export default class DelayedButton extends Component {
  handleClick = event => {
    console.log(this.props.delay);
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delay</button>
      </div>
    );
  }
}
