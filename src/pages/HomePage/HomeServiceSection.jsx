import React from "react";
import ServiceInfo from "../../components/service_product/ServiceInfo";
import ServiceList from "../../components/service_product/ServiceList";
import styled from "styled-components";
import service1Icon from "../../images/service_product/service1.svg";
import service2Icon from "../../images/service_product/service2.svg";
import service3Icon from "../../images/service_product/service3.png";
import service4Icon from "../../images/service_product/service4.svg";

const HomeServiceSection = () => {
  const serviceInfo = {
    title: "Digital transformation powered by ingenuity",
    texts: [
      "We don’t just build apps. Oursky creates digital experiences that help our partners succeed in today’s fast-paced business landscape.",
      "We work with founders in creating their blueprints for success — from minimum viable products (MVPs) to interactive prototypes. Oursky uses an iterative approach to help startups launch faster, scale quickly, and deliver great user experience.",
      "Oursky partners with enterprises to fast-track their digital transformation, helping them adopt and transition to cloud-native technologies and microservices."
    ],
    link: "More on our core services"
  };

  const serviceList = {
    title: "Core Services",
    lists: [
      {
        title: "Digital Product Development",
        text:
          "Scalable machine learning and artificial intelligence (AI) solutions",
        img: service1Icon
      },
      {
        title: "Digital Product Development",
        text:
          "Scalable machine learning and artificial intelligence (AI) solutions",
        img: service2Icon
      },
      {
        title: "Digital Product Development",
        text:
          "Scalable machine learning and artificial intelligence (AI) solutions",
        img: service3Icon
      },
      {
        title: "Digital Product Development",
        text:
          "Scalable machine learning and artificial intelligence (AI) solutions",
        img: service4Icon
      }
    ]
  };

  return (
    <StyledHomeServiceSection>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-5">
            <ServiceInfo info={serviceInfo}></ServiceInfo>
          </div>
          <div className="col-12 col-md-6">
            <ServiceList serviceList={serviceList}></ServiceList>
          </div>
        </div>
      </div>
    </StyledHomeServiceSection>
  );
};

const StyledHomeServiceSection = styled.section`
  background: #f3f3f3;
  padding: 100px 0px;
`;

export default HomeServiceSection;
