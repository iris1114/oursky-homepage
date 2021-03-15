import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import HomeHeroSection from "./HomeHeroSection";
import HomeAboutSection from "./HomeAboutSection";
import HomeCaseStudySection from "./HomeCaseStudySection";
import HomeServiceSection from "./HomeServiceSection";
import HomeProductSection from "./HomeProductSection";
import HomePartnerSection from "./HomePartnerSection";
import HomeContactSection from "./HomeContactSection";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HomeHeroSection />
        <HomeAboutSection />
        <HomeCaseStudySection />
        <HomeServiceSection />
        <HomeProductSection />
        <HomePartnerSection />
        <HomeContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
