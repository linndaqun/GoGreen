import React from "react";
import { Spring } from "react-spring/renderprops";
import ContactForm from "./contactForm";
// import styles from "./infoCards.module.css";

// list of colors for each dorm to display in a different color depending on their ranking
// I grabbed the background color from the monochrome spread here: https://www.colorhexa.com/24a113
let colors = ["#24a113", "#39AA2A", "#4FB342", "#65BD59"];

class InfoCards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    let data = {
      success: true,
      cards: [
        {
          id: 1,
          title: "Our Goal",
          description:
            "The 2020 Summer Startup Team works with sustainability organizations at Harvey Mudd like ASHMC sustainability and Engineers of a Sustainable World to help promote more eco-friendly practices on our campus by providing real-life incentives.",
        },
        {
          id: 3,
          title: "Current Challenges",
          description:
            "Earth Day Challenge! Waste Challenge! Food and Drink Challenge! Recycling Challenge!",
        },
        {
          id: 2,
          title: "How to Participate & Earn Points",
          description:
            "Sign up with your HMC email! Look on our actions page for sustainable practices that you can earn points for every time you complete the action!",
        },
        {
          id: 4,
          title: "Current Rewards",
          description: "Funded by ASHMC Sustainability and ESW!",
        },
      ],
    };
    this.setState({
      cards: data.cards,
    });
  }
  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -1200 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 0, duration: 2000 }}
      >
        {(props) => (
          <div style={props}>
            <div className="InfoCards">
              <div className="cards">
                {this.state.cards ? (
                  this.state.cards.map((card, i) => (
                    // <div
                    //   key={card.id}
                    //   // animation for dorm name and score *change later
                    //   style={{
                    //     animationDelay: i * 0.5 + "s",
                    //   }}
                    //   className="card"
                    // >
                    <div
                    // style={{
                    //   animationDelay: i * 0.5 + "s",
                    // }}
                    >
                      <div
                        style={{
                          backgroundColor: colors[i],
                          color: "white",
                          padding: "1.5rem",
                          borderRadius: "10px",
                          margin: "0 1.5rem",
                          maxWidth: "600px",
                          marginTop: "2rem",
                        }}
                        // className={styles.cardWrapper}
                      >
                        <h1 className="card-name">{card.title}</h1>
                        <p className="card-description">{card.description}</p>
                      </div>
                      {/* </div> */}
                    </div>
                  ))
                ) : (
                  <div className="empty">
                    Sorry no information is currently available
                  </div>
                )}
              </div>
            </div>
            <center>
              <ContactForm />
            </center>
          </div>
        )}
      </Spring>
    );
  }
}

export default InfoCards;