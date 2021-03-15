import React from "react";
import styled from "styled-components";
import partner1Logo from "../../images/partners/partner_logo1.svg";
import partner2Logo from "../../images/partners/partner_logo2.svg";
import partner3Logo from "../../images/partners/partner_logo3.svg";
import partner4Logo from "../../images/partners/partner_logo4.svg";
import partner5Logo from "../../images/partners/partner_logo5.svg";
import partner6Logo from "../../images/partners/partner_logo6.svg";
import partner7Logo from "../../images/partners/partner_logo7.svg";
import partner8Logo from "../../images/partners/partner_logo8.svg";

const HomePartnerSection = () => {
  const partners = [
    { img: partner1Logo },
    { img: partner2Logo },
    { img: partner3Logo },
    { img: partner4Logo },
    { img: partner5Logo },
    { img: partner6Logo },
    { img: partner7Logo },
    { img: partner8Logo }
  ];

  return (
    <StyledHomePartnerSection>
      <div className="container">
        <h2 className="f-lg-3xl text-center mb-5">
          We help companies around the world bring their ideas to life.
        </h2>
        <div className="row d-flex align-items-center">
          {partners.map((partner, index) => {
            return (
              <div className="col-6 col-md-3 text-center" key={index}>
                <img
                  className="partner_logo img-fluid"
                  src={partner.img}
                  alt="img"
                />
              </div>
            );
          })}
        </div>
      </div>
    </StyledHomePartnerSection>
  );
};

const StyledHomePartnerSection = styled.section`
  padding: 100px 0px;
  background: #f3f3f3;

  .partner_logo {
    height: 80px;
    padding: 20px 0;
  }
`;

export default HomePartnerSection;
