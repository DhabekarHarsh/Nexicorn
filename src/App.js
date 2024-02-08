import FeatureSection from "./Components/FeatureSection";
import Feature from "./Components/Feature";
import GetStartedSection from "./Components/GetStarted";
import Monetization from "./Components/Monetization";
import JobBoard from "./Components/JobBoard";
import Footer from "./Components/Footer";
import PaymentGateway from "./Components/PaymentGateway";
import Navbar from "./Components/Navbar";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <JobBoard />
      <FeatureSection />
      <Monetization />
      <Feature />
      <PaymentGateway />
      <GetStartedSection />
      <Footer />
    </>
  );
}

export default App;
