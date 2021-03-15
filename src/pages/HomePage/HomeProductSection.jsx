import React from "react";
import ServiceInfo from "../../components/service_product/ServiceInfo";
import ServiceList from "../../components/service_product/ServiceList";
import styled from "styled-components";
import product1Icon from "../../images/service_product/product1.png";
import product2Icon from "../../images/service_product/product2.png";
import product3Icon from "../../images/service_product/product3.png";

const HomeProductSection = () => {
  const productInfo = {
    title: "We’re your low-code solution for your next IT project.",
    texts: [
      "We develop various open-source solutions that can be used by developers and organizations around the world to solve problems.",
      "At the heart of Oursky is the art of software engineering: translating expertise and ideas into opportunities."
    ]
  };

  const productList = {
    title: "Product",
    lists: [
      {
        title: "Digital Product Development",
        text:
          "Scalable machine learning and artificial intelligence (AI) solutions",
        img: product1Icon
      },
      {
        title: "Digital Product Development",
        text:
          "Scalable machine learning and artificial intelligence (AI) solutions",
        img: product2Icon
      },
      {
        title: "Digital Product Development",
        text:
          "Scalable machine learning and artificial intelligence (AI) solutions",
        img: product3Icon
      }
    ]
  };

  return (
    <StyledHomeProductSection>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <ServiceList serviceList={productList}></ServiceList>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2  mb-5">
            <ServiceInfo info={productInfo}></ServiceInfo>
          </div>
        </div>
      </div>
    </StyledHomeProductSection>
  );
};

const StyledHomeProductSection = styled.section`
  padding: 100px 0px;
`;

export default HomeProductSection;
