import React from "react";
import styled from "styled-components";
import { ReactComponent as RightArrow } from "../../images/common/arrow_right.svg";

const LandingBtn = (props) => {
  const { text } = props;
  return (
    <a href="/#" className="d-flex align-items-center">
      <p className="mr-2">{text}</p>
      <StyledRightArrow />
    </a>
  );
};

const StyledRightArrow = styled(RightArrow)`
  fill: blue;
  width: 50px;
`;

export default LandingBtn;
