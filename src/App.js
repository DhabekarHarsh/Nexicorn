import FeatureSection from './Components/FeatureSection'
import Feature from './Components/Feature'
import GetStartedSection from './Components/GetStarted'
import Monetization from './Components/Monetization'
import JobBoard from './Components/JobBoard'
import Footer from './Components/Footer'
// import TestimonialCard from './Components/TestimonialCard'
import React from 'react'

function App() {
  return (
    <>
      <JobBoard></JobBoard>
      <FeatureSection></FeatureSection>
      <Monetization></Monetization>
      <Feature></Feature>
      <GetStartedSection></GetStartedSection>
      {/* <TestimonialCard></TestimonialCard> */}
      <Footer></Footer>



    </>
  )
}

export default App