import React from "react";
import RegularBtn from "../../components/common/RegularBtn";
import styled from "styled-components";

const HomeContactSection = () => {
  return (
    <StyledHomeContactSection>
      <div className="container text-center">
        <h2 className="f-lg-3xl mb-3">
          We build award-winning digital products.
        </h2>
        <p className="f-lg-2xl mb-5">Oursky can help you create one.</p>
        <RegularBtn text="Let’s talk!"></RegularBtn>
      </div>
    </StyledHomeContactSection>
  );
};

const StyledHomeContactSection = styled.section`
  padding: 100px 0px;
  background: #263043;
  color: #fff;
`;

export default HomeContactSection;
