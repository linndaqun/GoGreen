import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Challenges extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 2000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div style={challenges}>
              <h1>Current Challenges</h1>
              <p>Coming soon... :)</p>
              <p>
                Earth Day Challenge! Waste Challenge! Food and Drink Challenge!
                Recycling Challenge!
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const challenges = {
  background: "#00bfb6",
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
  margin: "0 1.5rem",
  maxWidth: "35rem",
};

export default Challenges;

