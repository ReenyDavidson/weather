import React, { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
  state = {
    term: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.term);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={this.onSubmit}>
          <input
            className="input"
            placeholder="Enter City Name"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
