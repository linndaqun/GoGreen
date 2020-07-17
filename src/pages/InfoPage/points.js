import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Points extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div style={points}>
              <h1>How to Participate & Earn Points</h1>
              <p>
                Sign up with your HMC email! Look on our actions page for
                sustainable practices that you can earn points for every time you complete the action!
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const points = {
  // I grabbed the background color from the monochrome spread here: https://www.colorhexa.com/24a113
  background: "#29b816",
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
  margin: "0 1.5rem",
  maxWidth: "600px",
};

export default Points;