import React from "react";
import InfoCards from "./infoCards";
import AddtoHomeScreen from "./addToHomeScreen";
import FBContactForm from "./fbContactForm";
import PwaCard from "./pwa";

const InfoPage = () => (
  <div className="base-container">
    {/* <PwaCard /> */}
    <InfoCards />
    <AddtoHomeScreen />
    <FBContactForm />
  </div>
);

export default InfoPage;
