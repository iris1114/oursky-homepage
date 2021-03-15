import React from "react";
import CaseStudyCard from "../../components/case_study/CaseStudyCard";
import LandingBtn from "../../components/common/LandingBtn";
import styled from "styled-components";
import card1Bg from "../../images/case_study/card1.png";
import card2Bg from "../../images/case_study/card2.png";
import card3Bg from "../../images/case_study/card3.gif";

const HomeCaseStudySection = () => {
  const cardsData = [
    {
      id: "card1",
      title: "Case Study",
      subtitle: "ASOS",
      bgImage: card1Bg,
      text:
        "We helped ASOS create a browsing experience where 4,000 new fashion items are published weekly."
    },
    {
      id: "card2",
      title: "Case Study",
      subtitle: "ASOS",
      bgImage: card2Bg,
      text:
        "We helped ASOS create a browsing experience where 4,000 new fashion items are published weekly."
    },
    {
      id: "card3",
      title: "Case Study",
      subtitle: "ASOS",
      bgImage: card3Bg,
      text:
        "We helped ASOS create a browsing experience where 4,000 new fashion items are published weekly."
    }
  ];

  return (
    <StyledHomeCaseStudySection>
      <section className="cards-section">
        <div className="container">
          <div className="cards d-flex justify-content-between mb-5">
            <div className="row mx-auto">
              {cardsData.map((card) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 mb-4" key={card.id}>
                    <CaseStudyCard card={card}></CaseStudyCard>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pl-3 pl-md-5">
            <LandingBtn text="Explore more of our work"></LandingBtn>
          </div>
        </div>
      </section>
    </StyledHomeCaseStudySection>
  );
};

const StyledHomeCaseStudySection = styled.section`
  padding: 100px 0px;
`;

export default HomeCaseStudySection;
