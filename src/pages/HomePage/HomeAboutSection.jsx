import React from "react";
import styled from "styled-components";
import aboutImg from "../../images/about.png";

const HomeAboutSection = () => {
  const aboutData = {
    title: "About Us",
    text:
      "Oursky is a team of talented developers, designers, data scientists, product and project managers and QA engineers working from Hong Kong, London, and Taipei. Using cutting-edge technologies, we are an end-to-end digital product, web, and mobile app development consultancy whose creations have garnered millions of downloads and awards from the Apple App Store and Asia Smart Apps Awards.",
    imgSrc: aboutImg
  };

  return (
    <StyledHomeAboutSection>
      <div className="container">
        <div className="row">
          <div className="col col-md-7 col-12">
            <h2 className="f-lg-m mb-3">{aboutData.title}</h2>
            <p className="f-lg-2xl f-xl">{aboutData.text}</p>
          </div>
          <div className="col col-md-5 col-12 mx-auto text-center">
            <img
              className="bg-info w-75 img-fluid"
              src={aboutData.imgSrc}
              alt="img"
            />
          </div>
        </div>
      </div>
    </StyledHomeAboutSection>
  );
};

const StyledHomeAboutSection = styled.section`
  background: #f3f3f3;
  padding: 100px 0px;
`;

export default HomeAboutSection;
