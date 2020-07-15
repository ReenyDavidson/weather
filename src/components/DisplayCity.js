import React from "react";
import "./DisplayCity.css";

const DisplayCity = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="name">{props.city}</div>
      <div className="descr">{props.descr}</div>
      <div>{props.img}</div>
      <div className="main">{props.main}</div>
      <div className="temp">{props.temp}</div>
      <div className="country">{props.country}</div>
    </div>
  );
};
export default DisplayCity;
