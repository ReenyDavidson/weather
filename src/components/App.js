import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import DisplayCity from "./DisplayCity";
import Header from "./Header";

const key = "02c0ca2f81c3769d84452840b85563b6";

export class App extends Component {
  state = { city: "", weather: "", main: "", country: "" };
  onSearchSubmit = async (term) => {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${key}`,
    );
    const result = res.data;
    this.setState({
      city: result,
      weather: result.weather[0],
      main: Math.floor(result.main.temp - 273.15) + "°c",
      country: "COUNTRY: " + result.sys.country,
    });

    console.log(result);
  };

  render() {
    return (
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <Header />
        <SearchBar handleSubmit={this.onSearchSubmit} />
        <DisplayCity city={this.state.city.name} />
        <DisplayCity descr={this.state.weather.description} />
        <div
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={require("../sun.png")} style={{ width: "100px" }} alt="" />
        </div>
        <DisplayCity main={this.state.weather.main} />
        <DisplayCity temp={this.state.main} />
        <DisplayCity country={this.state.country} />
      </div>
    );
  }
}

export default App;
