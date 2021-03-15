import React from "react";
import styled from "styled-components";

const StyledRegularBtn = styled.div`
  .button {
    background-color: #faac2c;
    padding: 10px 20px;
    border-radius: 6px;
    color: #fff;

    &:hover {
      background: #faac2c;
      border-color: #faac2c;
      opacity: 0.8;
      color: #fff;
    }
  }
`;

const RegularBtn = ({ text }) => {
  return (
    <StyledRegularBtn>
      <a href="/#" className="button">
        {text}
      </a>
    </StyledRegularBtn>
  );
};

export default RegularBtn;
