import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div className="ui field">
        <label htmlFor="name">Name </label>
        <input type="text" id="name" />
      </div>
    );
  }
}

export default Field;
