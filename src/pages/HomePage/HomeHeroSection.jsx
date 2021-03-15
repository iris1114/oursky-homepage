import React from "react";
import LandingBtn from "../../components/common/LandingBtn";
import styled from "styled-components";
import heroImg from "../../images/hero.png";
import { breakpoints } from "../../assets/utils";

const HomeHeroSection = () => {
  const heroData = {
    text: "We design and develop award-winning applications",
    imgSrc: heroImg
  };

  return (
    <StyledHomeHeroSection>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <h1 className="f-lg-6xl text-white text-center f-4xl mb-5">
              {heroData.text}
            </h1>
          </div>
          <div className="col-md-6 col-12">
            <img className="img-fluid" src={heroData.imgSrc} alt="img" />
          </div>
        </div>
        <div className="row lading-btn">
          <div className="col-12 bg-white p-3 rounded shadow-lg">
            <LandingBtn text="Learn more about how we digitally transform businesses by creating amazing digital products." />
          </div>
        </div>
      </div>
    </StyledHomeHeroSection>
  );
};

const StyledHomeHeroSection = styled.section`
  background-color: #123fae;
  padding: 100px 0px;

  .lading-btn {
    position: relative;
    top: 130px;
    width: 50%;

    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
    }
  }
`;

export default HomeHeroSection;
