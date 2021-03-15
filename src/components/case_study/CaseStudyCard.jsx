import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const CaseStudyCard = (props) => {
  const { card } = props;

  return (
    <StyledCaseStudyCard bg={card.bgImage}>
      <Card.Body>
        <Card.Title className="f-lg-s">{card.title}</Card.Title>
        <Card.Title className="f-lg-2xl">{card.subtitle}</Card.Title>
        <Card.Text className="f-lg-m">{card.text}</Card.Text>
      </Card.Body>
    </StyledCaseStudyCard>
  );
};

const StyledCaseStudyCard = styled(Card)`
  height: 420px;
  width: 313px;
  background-size: cover;
  padding: 20px;
  color: #fff;
  border-radius: 10px;
  background-image: url(${(props) => props.bg});
`;

export default CaseStudyCard;
