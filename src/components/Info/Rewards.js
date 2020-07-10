import React from "react"; // No longer imports { Component } because it was unused. Feel free to change.
import { Spring } from "react-spring/renderprops";

export default function Rewards() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 3000, duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <div style={goal}>
            <h1>Current Rewards</h1>
            <p>Coming soon... :)</p>
            <p>Funded by ASHMC Sustainability and ESW!</p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const goal = {
  background: "#00a8bf",
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
  margin: "0 1.5rem",
  maxWidth: "35rem",
};