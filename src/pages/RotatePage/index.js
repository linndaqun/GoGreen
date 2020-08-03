import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import React, { Component } from "react";
import { Slide } from "material-auto-rotating-carousel";
import suslogoImg from "../../img/suslogo.svg";

// Following line was unused and throwing a warning so I commented it out -Katie
// const Button = require("@material-ui/core/Button").default;

export class Rotate extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <AutoRotatingCarousel
          autoplay={false}
          interval={9000}
          hideArrows={false}
          open={true}
          mobile={true}
          label="Get started"
          onStart={() => (window.location.href = "/signup")}
        >
          <Slide
            // media ={<LandingPage class="responsive"/> }
            media={<img alt="" src={suslogoImg} class="responsive" />}
            mediaBackgroundStyle={{ backgroundColor: "#15601e" }}
            style={{ backgroundColor: "#15601e" }}
            title="What will we accomplish?"
            subtitle="Lets be sustainable together and make this world a better place one action at a time!"
          />
          <Slide
            //   media={<img src={Login} class="snapgrid"/>}
            mediaBackgroundStyle={{ backgroundColor: "#1c8028" }}
            style={{ backgroundColor: "#1c8028" }}
            title="Earn points!"
            subtitle="Click the plus icon to earn points and log your sustainable actions. Save your favorites so they're easy to find! Special surprise for mastering an action!"
          />
          <Slide
            //   media={<img src={Swipe} class="responsive"/>}
            mediaBackgroundStyle={{ backgroundColor: "#24a133" }}
            style={{ backgroundColor: "#24a133" }}
            title="Compete Across Dorms!"
            subtitle="Encourage your dorm friends to be more eco-friendly!"
          />
          <Slide
            //   media={<img src={Result} class="snapgrid" />}
            mediaBackgroundStyle={{ backgroundColor: "#4fb35b" }}
            style={{ backgroundColor: "#4fb35b" }}
            title="Add to Home Screen!"
            subtitle="Easy to access to our app!"
          />
        </AutoRotatingCarousel>
      </div>
    );
  }
}
export default Rotate;
